import React from "react";
import styled from "styled-components";
import CustomInput from "../../components/EtcItem/CustomInput";
import GoogleLogo from "../../assets/google.png";
import KakaoLogo from "../../assets/kakao-talk.png";

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
    border-radius: 25px;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
    border: none;
    background-color: #ffff;

`;

const RegisterText = styled.span`
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Title = styled.h1`
    width: 100%;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    font-size: 25px;
`;

const Label = styled.span`
    font-size: 18px;
    font-weight: 800;
    margin: 10px;
`;

const BtnStyle = styled.button`
    margin-top: 10px;
    background-color: white;
    font-weight: 800;
    width: 70%;
    height: 38px;
    border-radius: 0.55rem;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
    border: none;
    &:hover{
        box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
    }
    cursor: pointer;
`;

const SocialText = styled.span`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
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
                        <Title>Eatogether is waiting for you</Title>
                        <CustomInput label={"ID"} placeholderText={"Username"}/>
                        <CustomInput label={"Password"} placeholderText={"Password"}/>
                        <BtnStyle>Sign In</BtnStyle>
                        <SocialText>or Login with</SocialText>
                        <SocialBtnWrap>
                            <SocialBtnStyle><Logo src={GoogleLogo} /></SocialBtnStyle>
                            <SocialBtnStyle><Logo src={KakaoLogo} /></SocialBtnStyle>
                        </SocialBtnWrap>
                    <RegisterText>Not Registered?<a>Create Account</a></RegisterText>
                </LoginCard>
            </Container>
        </div>
);
}
export default Login;