import React from "react";
import Login from "./../../pages/Login/Login";
import Home from "./../../pages/Home/Home";
import NavStyle from "./NavStyle.module.css";
import {Routes, Route, Link} from "react-router-dom";

const Nav = () => {
    const address = '서울특별시 성북구 정릉동 851-1';
    return (
        <div>
            <nav>
                <Link to="/home">EATOGETHER</Link>
                <form action="" method="">
                    <input type="text" className={NavStyle.addressInput} placeholder="2km 오차가 있을 수 있으니 정확한 주소를 입력해주세요" />
                    <input type="image" className={NavStyle.imgBtn} src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png"/>
                </form>
                <Link to="/login">로그인</Link>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} /> 
            </Routes>  
        </div>
    );
}

export default Nav;