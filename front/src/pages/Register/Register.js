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
    background-color: #f3f3f3;
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
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
    border: none;
    background-color: #ffff;
`;

const Title = styled.h1`
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    font-size: 25px;
`;

const IdentifyText = styled.span`
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
                        <Title>Create Account</Title>
                        <CustomInput label={"ID"} placeholderText={"Username"}/>
                        <CustomInput label={"Nickname"} placeholderText={"Automatically created"}/>
                        <CustomInput label={"Email"} placeholderText={"Email"}/>
                        <CustomInput label={"Password"} placeholderText={"Password"}/>
                        <IdentifyText>Confirm Password</IdentifyText>
                        <LoginButton btnlabel={"Sign Up"}></LoginButton>
                </RegisterCard>
            </Container>
        </div>
);
}
export default Register;