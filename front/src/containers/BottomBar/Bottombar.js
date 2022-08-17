import React from "react";
import * as style from "./styles";
import { Link } from "react-router-dom";

const Bottombar = ({user, isClickLeaderMK, isClickFollowMK}) => {
  return (
    <div>
      <style.Wrapper>
        { user.isLoggedIn && isClickLeaderMK ? (
            <style.Span2>
              <Link to="/createMenu">새 메뉴 만들기</Link>
            </style.Span2>
        ) : (
            <style.Span1>
              새 메뉴 만들기
            </style.Span1>
        )}
        { isClickFollowMK ? (
            <style.Span2>
              <Link to="/followMenu">참여하기</Link>
            </style.Span2>
        ) : (
          <style.Span1>
            참여하기
          </style.Span1>
        )}
        
        { user.isLoggedIn ? (
          <style.Span2>
            <Link to="/createMenu">채팅하기</Link>
          </style.Span2>
        ) : (
          <style.Span1>
            채팅하기
          </style.Span1>
        )
      }
      </style.Wrapper>
    </div>
  );
};

export default Bottombar;
