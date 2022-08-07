import React from "react";
import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home";
import Nav from "./components/AppBar/Nav";
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
      </Routes>
    </div>
  );
}
//

export default App;
