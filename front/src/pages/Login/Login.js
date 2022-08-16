import React from "react";
import * as style from "./styles";
import CustomInput from "components/EtcItem/CustomInput";
import GoogleLogo from "assets/images/google.png";
import KakaoLogo from "assets/images/kakao-talk.png";
import LoginButton from "components/EtcItem/LoginButton";
import { Link } from "react-router-dom";

const Login = () => {
  //submit작업
  return (
    <>
      <style.Container>
        <style.LoginCard>
          <style.Title>웰컴투 더치배달</style.Title>
          <CustomInput
            label={"아이디"}
            placeholderText={"아이디를 입력하세요"}
            Type={"text"}
          />
          <CustomInput
            label={"비밀 번호"}
            placeholderText={"비밀번호를 입력하세요"}
            Type={"password"}
          />
          <Link to="/" style={style.LinkStyle}>
            <LoginButton btnlabel={"로그인"}></LoginButton>
          </Link>
          <style.SocialText>소셜 로그인</style.SocialText>
          <style.SocialBtnWrap>
            <style.SocialBtnStyle>
              <style.Logo src={GoogleLogo} />
            </style.SocialBtnStyle>
            <style.SocialBtnStyle>
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
