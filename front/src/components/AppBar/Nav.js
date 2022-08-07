import React from "react";
import NavStyle from "./NavStyle.module.css";

const Nav = () => {
    return (
        <>
        <form action="" method="">
            <input type="text" className={NavStyle.addressInput} placeholder="2km 오차가 있을 수 있으니 정확한 주소를 입력해주세요" />
            <input type="image" className={NavStyle.imgBtn} src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png"/>
        </form> 
        </>
    );
}

export default Nav;