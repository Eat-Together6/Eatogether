
import React from "react";
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home";
import Nav from "./components/AppBar/Nav";
import CreateMenu from "./pages/CreateMenu/CreateMenu";
import {Routes, Route, Link} from "react-router-dom";
import AppStyle from "./AppStyle.module.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">EATOGETHER</Link>
        <Nav />
        <Link to="/login">로그인</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/createMenu" element={<CreateMenu />} />
      </Routes>
    </div>
  );
}

export default App;
