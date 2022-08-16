// import styles from "./styles.module.css";
import * as style from "./styles";
import { Link } from "react-router-dom";
import auth from "api/auth";
import { useResetRecoilState } from "recoil";
import { authState } from "state";
import { deleteCookie } from "cookies-next";

export default function NavigationBar({ user }) {
  const resetUser = useResetRecoilState(authState);
  const logout = async () => {
    await auth
      .logout()
      .then((res) => {
        resetUser();
        deleteCookie("access_token");
        deleteCookie("refresh_token");
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <style.Wrapper>
        <style.Nav>
          <style.Span>
            <Link to="/">더치 배달</Link>
          </style.Span>
          {user.isLoggedIn ? (
            <>
              <style.Span>
                <img src={user.social_img !== "" ? user.social_img : ""}></img>
                <Link to="/mypage">{user.name}</Link>
              </style.Span>
              <style.Span>
                <button onClick={logout}>로그아웃</button>
              </style.Span>
            </>
          ) : (
            <style.Span>
              <Link to="/login">로그인</Link>
            </style.Span>
          )}
        </style.Nav>
      </style.Wrapper>
    </>
  );
}
