import React from "react";
import { NavigationBar } from "containers";
import Authorized from "routes/Authorized";
import Unauthorized from "routes/Unauthorized";
import GlobalStyle from "assets/GlobalStyle";
import { useRecoilValue } from "recoil";
import { authState } from "state";

function App() {
  const userInfo = useRecoilValue(authState);
  return (
    <>
      <GlobalStyle />
      <NavigationBar user={userInfo} />
      {userInfo.isLoggedIn ? <Authorized user={userInfo}/> : <Unauthorized user={userInfo}/>}
    </>
  );
}

export default App;
