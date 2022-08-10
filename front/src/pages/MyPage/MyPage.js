import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import UserImage from "../../assets/user.png";
import LoginButton from "../../components/EtcItem/LoginButton";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3;
`;

const MypageCard = styled.div`
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
    font-family: 'BMHANNAPro';
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    font-size: 25px;
`;

const FaceLogo = styled.img`
    width: 70px;
    height: 70px;
`;

const InfoWrap = styled.div`
    width: 70%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const InfoLabel = styled.span`
    font-family: 'BMHANNAPro';
    font-size: 18px;
    font-weight: 800;
    margin: 10px;
`;

const InfoText = styled.span`
    font-family: 'BMHANNAPro';
    height: 38px;
    padding: 0px 20px;
    border-radius:0.55rem;
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
    border: none;
    display: flex;
    align-items: center;
`;

const MyPage = () => {
    return (
        <Container>
                <MypageCard>
                        <Title>마이페이지</Title>
                        <FaceLogo src={UserImage} />
                        <InfoWrap>
                            <InfoLabel>아이디</InfoLabel>
                            <InfoText>jk98</InfoText>
                        </InfoWrap>
                        <InfoWrap>
                            <InfoLabel>닉네임</InfoLabel>
                            <InfoText>케이틀린</InfoText>
                        </InfoWrap>
                        <InfoWrap>
                            <InfoLabel>이메일</InfoLabel>
                            <InfoText>jk98@gmail.com</InfoText>
                        </InfoWrap>
                        <Link to="/orderhistory"><LoginButton btnlabel={"나의 주문내역"}></LoginButton></Link>
                </MypageCard>
        </Container>
);
}
export default MyPage;