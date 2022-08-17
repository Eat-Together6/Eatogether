// import styles from "./styles.module.css";
import * as style from "./styles";
import { Link } from "react-router-dom";
import auth from "api/auth";
import { useResetRecoilState } from "recoil";
import { authState } from "state";
import { deleteCookie, getCookie } from "cookies-next";
import Logo from "assets/images/logo.png"

export default function NavigationBar({ user }) {
  const resetUser = useResetRecoilState(authState);
  const logout = async () => {
    await auth
      .logout({
        refresh: getCookie("refresh_token"),
      })
      .then((res) => {
        resetUser();
        deleteCookie("access_token");
        deleteCookie("refresh_token");
        alert("로그아웃 되었습니다!");
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <style.Wrapper>
        <style.Nav>
          <style.Span>
            <Link to="/"><style.Logo src={Logo}/></Link>
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
