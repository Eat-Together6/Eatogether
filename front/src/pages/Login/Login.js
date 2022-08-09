import React from "react";
import styled from "styled-components";
import CustomInput from "../../components/EtcItem/CustomInput";
import GoogleLogo from "../../assets/google.png";
import KakaoLogo from "../../assets/kakao-talk.png";
import LoginButton from "../../components/EtcItem/LoginButton";
import {Link} from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3;
`;

const LoginCard = styled.div`
    border: 1px solid black;
    width: 600px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 0.55rem;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
    border: none;
    background-color: #ffff;
`;

const RegisterText = styled.span`
    font-family: 'BMHANNAPro';
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Title = styled.h1`
    font-family: 'BMHANNAPro';
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    font-size: 25px;
`;

const SocialText = styled.span`
    font-family: 'BMHANNAPro';
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    margin-top: 40px;
`;

const SocialBtnWrap = styled.div`
    display: flex;
    align-items: center;
`;

const SocialBtnStyle = styled.button`
    background-color: white;
    margin: 10px;
    height: 55px;
    width: 55px;
    border-radius: 50px;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
    border: none;
    &:hover{
        box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
    }
    cursor: pointer;
`;

const Logo = styled.img`
    width: 30px;
    height: 30px;
`;

const Login = () => {
    return (
        <div>
            <Container>
                <LoginCard>
                        <Title>Eatogether는 당신을 기다려요!</Title>
                        <CustomInput label={"아이디"} placeholderText={"아이디를 입력하세요"}/>
                        <CustomInput label={"비밀 번호"} placeholderText={"비밀번호를 입력하세요"}/>
                        <LoginButton btnlabel={"로그인"}></LoginButton>
                        <SocialText>소셜 로그인</SocialText>
                        <SocialBtnWrap>
                            <SocialBtnStyle><Logo src={GoogleLogo} /></SocialBtnStyle>
                            <SocialBtnStyle><Logo src={KakaoLogo} /></SocialBtnStyle>
                        </SocialBtnWrap>
                    <RegisterText>아직 계정이 없으신가요?<Link to="/register">회원 가입하기</Link></RegisterText>
                </LoginCard>
            </Container>
        </div>
);
}
export default Login;