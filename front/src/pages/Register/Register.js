import React from "react";
import styled from "styled-components";
import CustomInput from "../../components/EtcItem/CustomInput";
import LoginButton from "../../components/EtcItem/LoginButton";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ececec;
`;

const RegisterCard = styled.div`
    border: 1px solid black;
    width: 600px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 0.55rem;
    box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #ffffff;
    border: 8px solid #ececec;
    outline: none;
    background-color: #ececec;
`;

const Title = styled.h1`
    font-family: 'BMHANNAPro';
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    font-size: 25px;
`;

const IdentifyText = styled.span`
    font-family: 'BMHANNAPro';
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: ;
    align-items: center;
    font-size: 13px;
    margin-left: 190px;
    cursor: pointer;
`;

const Register = () => {
    return (
        <div>
            <Container>
                <RegisterCard>
                        <Title>회원 가입</Title>
                        <CustomInput label={"아이디"} placeholderText={"아이디를 입력하세요"}/>
                        <CustomInput label={"닉네임"} placeholderText={"자동으로 설정됩니다"}/>
                        <CustomInput label={"이메일"} placeholderText={"이메일을 입력하세요"}/>
                        <CustomInput label={"비밀 번호"} placeholderText={"비밀 번호를 입력하세요"}/>
                        <IdentifyText>비밀번호 확인</IdentifyText>
                        <LoginButton btnlabel={"회원 가입하기"}></LoginButton>
                </RegisterCard>
            </Container>
        </div>
);
}
export default Register;