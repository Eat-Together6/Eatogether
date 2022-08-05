import React from "react";
import {Routes, Route, Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <span>EATOGETHER</span>
                <form action="" method="">
                    <input value="성북구 정릉로" />
                </form>
                {/* <Link to="/Login">로그인</Link> */}
            </nav>
            
            {/* <Routes>
                <Route path="/Login" element={} />
            </Routes> */}
        </div>

        
    );
}

export default Nav;