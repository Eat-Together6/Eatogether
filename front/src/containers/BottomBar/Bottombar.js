import React from "react";
import * as style from "./styles";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "state";

const Bottombar = ({ isClickLeaderMK, isClickFollowMK }) => {
  const userInfo = useRecoilValue(authState);
  return (
    <div>
      <style.Wrapper>
        {userInfo.isLoggedIn && isClickLeaderMK ? (
          <style.Span2>
            <Link to="/createMenu">새 메뉴 만들기</Link>
          </style.Span2>
        ) : (
          <style.Span1>
            <Link to="/createMenu">새 메뉴 만들기</Link>
          </style.Span1>
        )}
        {isClickFollowMK ? (
          <style.Span2>
            <Link to="/followMenu">참여하기</Link>
          </style.Span2>
        ) : (
          <style.Span1>
            <Link to="/followMenu">참여하기</Link>
          </style.Span1>
        )}

        {userInfo.isLoggedIn ? (
          <style.Span2>
            <Link to="/board">채팅하기</Link>
          </style.Span2>
        ) : (
          <style.Span1>
            <Link to="/board">채팅하기</Link>
          </style.Span1>
        )}
        <style.Span1>
          <Link to="/board">확인하기</Link>
        </style.Span1>
      </style.Wrapper>
    </div>
  );
};

export default Bottombar;
