import React from "react";
import { NavigationBar } from "containers";
import Authorized from "routes/Authorized";
import Unauthorized from "routes/Unauthorized";
import GlobalStyle from "assets/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <Authorized />
      <Unauthorized />
    </>
  );
}

export default App;
