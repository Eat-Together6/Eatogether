import { useEffect, useState } from "react";
import * as style from "./styles";
import CustomInput from "components/EtcItem/CustomInput";
import GoogleLogo from "assets/images/google.png";
import KakaoLogo from "assets/images/kakao-talk.png";
import LoginButton from "components/EtcItem/LoginButton";
import getKakaoToken from "api/socialLogin";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "api/auth";
import { useRecoilState } from "recoil";
import { authState } from "state";
import { setCookie, deleteCookie } from "cookies-next";
import { useInput } from "hooks";
import Loading from "components/EtcItem/Loading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [, setUser] = useRecoilState(authState);
  const [form, handleForm, reset] = useInput({
    email: "",
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const kakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  const kakaoSocialLogin = async (code) => {
    await getKakaoToken(REST_API_KEY, REDIRECT_URI, code)
      .then((res) => res.json())
      .then((data) => {
        console.log("??", data);
        setLoading(true);
        if (data.access_token) {
          auth
            .kakaoAuthenticate({ access_token: data.access_token, code: code })
            .then((res) => {
              saveUserInfo(res.data.access_token, res.data.refresh_token);
            })
            .catch((err) => {
              alert(err.response.data.err_msg);
              console.log("실패", err);
            });
        } else {
          alert("인증되지 않은 회원입니다.");
          navigate("/login");
        }
      });
  };
  const saveUserInfo = async (access, refresh) => {
    setCookie("access_token", access);
    setCookie("refresh_token", refresh);
    await auth
      .getUser()
      .then((res) => {
        setUser({
          isLoggedIn: true,
          name: res.data.name,
          email: res.data.email,
          social_img: res.data.social_img,
          user_id: res.data.id,
          access_token: access,
          refresh_token: refresh,
        });
        setLoading(false);
        alert("로그인");
        navigate("/");
      })
      .catch((e) => {
        deleteCookie("access_token");
        deleteCookie("refresh_token");
        console.log(e);
        setLoading(false);
        alert("로그인이 실패했습니다 다시 시도해주세요!");
      });
  };
  const Login = async () => {
    setLoading(true);
    await auth
      .login(form)
      .then((res) => {
        saveUserInfo(res.data.access_token, res.data.refresh_token);
      })
      .catch((e) => {
        setLoading(false);
        alert("로그인이 실패하였습니다 다시 시도하여 주십쇼");
        console.log(e);
      });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");
    if (code) {
      kakaoSocialLogin(code);
    } else {
      console.log("헿");
    }
  }, []);

  const getGoogleToken = () => {
    gapi.client.init({
      clientID,
      scope: "email",
    });
  };
  useEffect(() => {
    gapi.load("client:auth2", getGoogleToken);
  }, []);

  const googleSocialLogin = async (data) => {
    await auth
      .googleAuthenticate(data)
      .then((res) => {
        saveUserInfo(res.data.access_token, res.data.refresh_token);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.err_msg);
        setLoading(false);
      });
  };

  const onSuccess = (response) => {
    setLoading(true);
    console.log(response);
    const data = {
      code: response.tokenId,
      access_token: response.accessToken,
      email: response.profileObj.email,
      profile_image: response.profileObj.imageUrl,
      name: response.profileObj.name,
    };
    console.log("구글로그인 시도!", data);
    googleSocialLogin(data);
  };
  const onFailure = (error) => {
    console.log(error);
  };
  return (
    <>
      <style.Container>
        {loading ? <Loading /> : null}
        <style.LoginCard>
          <style.Title>웰컴투 더치배달</style.Title>
          <CustomInput
            label={"이메일"}
            placeholderText={"이메일을 입력하세요"}
            Type={"email"}
            name="email"
            value={form.email}
            onChange={handleForm}
          />
          <CustomInput
            label={"비밀 번호"}
            placeholderText={"비밀번호를 입력하세요"}
            Type={"password"}
            name="password"
            value={form.password}
            onChange={handleForm}
          />
          <LoginButton btnlabel={"로그인"} onClick={Login}></LoginButton>
          <style.SocialText>소셜 로그인</style.SocialText>
          <style.SocialBtnWrap>
            <GoogleLogin
              render={(renderProps) => (
                <style.SocialBtnStyle onClick={renderProps.onClick}>
                  <style.Logo src={GoogleLogo} />
                </style.SocialBtnStyle>
              )}
              clientId={clientID}
              onSuccess={onSuccess}
              responseType={"id_token"}
              onFailure={onFailure}
            />

            <style.SocialBtnStyle onClick={kakaoLogin}>
              <style.Logo src={KakaoLogo} />
            </style.SocialBtnStyle>
          </style.SocialBtnWrap>
          <style.RegisterText>
            아직 계정이 없으신가요?&nbsp;
            <Link to="/register">회원 가입하기</Link>
          </style.RegisterText>
        </style.LoginCard>
      </style.Container>
    </>
  );
};
export default Login;
