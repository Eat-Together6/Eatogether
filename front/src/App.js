import React from "react";
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home";
import CreateMenu from "./pages/CreateMenu/CreateMenu";
import Register from "./pages/Register/Register";
import {Routes, Route, Link} from "react-router-dom";
import AppStyle from "./AppStyle.module.css";

function App() {
  return (
    <div className="App">
      <div className={AppStyle.wrapper}>
        <nav>
          <Link to="/">EATOGETHER</Link>
          <Link to="/login">로그인</Link>
        </nav>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/createMenu" element={<CreateMenu />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
