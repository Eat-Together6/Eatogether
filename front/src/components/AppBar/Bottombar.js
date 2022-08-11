import React from "react";
import bottombar from "./bottombar.module.css";
import { Routes, Route, Link } from "react-router-dom";
import CreateMenu from "../../pages/CreateMenu/CreateMenu";

const Bottombar = () => {
  return (
    <div>
      <div className={bottombar.wrapper}>
        <Link to="/createMenu">새 메뉴 만들기</Link>
        <Link to="/followMenu">참여하기</Link>
        <Link to="/createMenu">채팅하기</Link>
      </div>
      <Routes>
        <Route path="/createMenu" element={<CreateMenu />} />
      </Routes>
    </div>
  );
};

export default Bottombar;
