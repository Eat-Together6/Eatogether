import React, { useEffect, useState } from "react";
import * as style from "./styles";
import { Link } from "react-router-dom";
import UserImage from "assets/images/user.png";
import LoginButton from "components/EtcItem/LoginButton";
import auth from "api/auth";
import { ThemeConsumer } from "styled-components";

const MyPage = () => {
  const [userdata, setUserData] = useState({
    id: "jk98",
    name: "케이틀린",
    email: "jk98@gmail.com",
  });

  const getUserData = async() => {
    await auth.getUser()
    .then((response) => {
      console.log(response)
      setUserData(response.data)
    });
  }

  useEffect(() => {
    getUserData()
    //데이터 받아오기 await async check!
  }, []);

  return (
    <style.Container>
      <style.MypageCard>
        <style.Title>마이페이지</style.Title>
        <style.FaceLogo src={UserImage} />
        <style.InfoWrap>
          <style.InfoLabel>아이디</style.InfoLabel>
          <style.InfoText>{userdata.id}</style.InfoText>
        </style.InfoWrap>
        <style.InfoWrap>
          <style.InfoLabel>닉네임</style.InfoLabel>
          <style.InfoText>{userdata.nickname}</style.InfoText>
        </style.InfoWrap>
        <style.InfoWrap>
          <style.InfoLabel>이메일</style.InfoLabel>
          <style.InfoText>{userdata.email}</style.InfoText>
        </style.InfoWrap>
        <Link to="/orderhistory" style={style.LinkStyle}>
          <LoginButton btnlabel={"나의 주문내역"}></LoginButton>
        </Link>
      </style.MypageCard>
    </style.Container>
  );
};
export default MyPage;
