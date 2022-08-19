import { useEffect } from "react";
import { NavigationBar } from "containers";
import Authorized from "routes/Authorized";
import Unauthorized from "routes/Unauthorized";
import GlobalStyle from "assets/GlobalStyle";
import { useRecoilState } from "recoil";
import { getCookie, deleteCookie } from "cookies-next";
import auth from "api/auth";
import { authState } from "state";

function App() {
  const [userInfo, setUserInfo] = useRecoilState(authState);
  const setUserInformation = async () => {
    const access = getCookie("access_token");
    const refresh = getCookie("refresh_token");
    if (access && refresh) {
      await auth
        .getUser()
        .then((res) => {
          setUserInfo({
            isLoggedIn: true,
            name: res.data.name,
            email: res.data.email,
            social_img: res.data.social_img,
            user_id: res.data.id,
            access_token: access,
            refresh_token: refresh,
          });
        })
        .catch((e) => {
          deleteCookie("access_token");
          deleteCookie("refresh_token");
        });
    }
  };
  useEffect(() => {
    setUserInformation();
  }, []);

  return (
    <>
      <GlobalStyle />
      <NavigationBar user={userInfo} />
      {userInfo.isLoggedIn ? <Authorized /> : <Unauthorized />}
    </>
  );
}

export default App;
