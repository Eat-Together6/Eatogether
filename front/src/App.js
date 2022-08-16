import React from "react";
import { NavigationBar } from "containers";
import AppStyle from "./AppStyle.module.css";
import Authorized from "routes/Authorized";
import Unauthorized from "routes/Unauthorized";

function App() {
  return (
    <>
      <NavigationBar />
      <Authorized />
      <Unauthorized />
    </>
  );
}

export default App;
