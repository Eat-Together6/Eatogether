import * as style from "./styles";
import CustomInput from "components/EtcItem/CustomInput";
import LoginButton from "components/EtcItem/LoginButton";
import auth from "api/auth";
import { useInput } from "hooks";
import { useRecoilState } from "recoil";
import { authState } from "state";
import { setCookie } from "cookies-next";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [, setUser] = useRecoilState(authState);
  const [form, handleForm, reset] = useInput({
    email: "",
    password1: "",
    password2: "",
    name: "",
  });
  const signUp = async () => {
    await auth
      .registration(form)
      .then((res) => {
        setUser({
          isLoggedIn: true,
          name: res.data.user.name,
          email: res.data.user.email,
          social_img: res.data.user.social_img,
          user_id: res.data.user.id,
          access_token: res.data.access_token,
          refresh_token: res.data.refresh_token,
        });
        setCookie("access_token", res.data.access_token);
        setCookie("refresh_token", res.data.refresh_token);
        alert("회원가입 성공!!");
        navigate("/");
      })
      .catch((err) => {
        let message = "";
        let errorObj = err.response.data;
        Object.keys(errorObj).map((key) => {
          message +=
            "issue: <" +
            String(key) +
            "> cause: - " +
            String(errorObj[key]) +
            "\n";
        });
        alert(message);
      });
  };
  return (
    <div>
      <style.Container>
        <style.RegisterCard>
          <style.Title>회원 가입</style.Title>
          <CustomInput
            label={"이름"}
            placeholderText={"이름을 입력하세요"}
            Type={"text"}
            value={form.name}
            name="name"
            onChange={handleForm}
          />
          <CustomInput
            label={"이메일"}
            placeholderText={"이메일을 입력하세요"}
            Type={"email"}
            value={form.email}
            name="email"
            onChange={handleForm}
          />
          <CustomInput
            label={"비밀 번호"}
            placeholderText={"비밀 번호를 입력하세요"}
            Type={"password"}
            value={form.password1}
            name="password1"
            onChange={handleForm}
          />
          <CustomInput
            label={"비밀 번호 확인"}
            placeholderText={"비밀 번호를 다시 입력하세요"}
            Type={"password"}
            value={form.password2}
            name="password2"
            onChange={handleForm}
          />
          <LoginButton
            btnlabel={"회원 가입하기"}
            onClick={signUp}
          ></LoginButton>
        </style.RegisterCard>
      </style.Container>
    </div>
  );
};
export default Register;
