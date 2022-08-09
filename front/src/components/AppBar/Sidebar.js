import React, {useState} from "react";
import sidebar from "./sidebar.module.css"
import styled from "styled-components";

const Sidebar = () => {
    const [arrow, setArrow] = useState({
        active: true
    });

    const isActive = (e) => {
        setArrow({
            active: !arrow.active
        })
    }

    return (
        <div className={sidebar.wrapper}> 
            <input type="button" className={arrow.active ? sidebar.arrow : `${sidebar.arrow} ${sidebar.arrowActive}`} onClick={isActive} />
            <div className={arrow.active ? sidebar.sidebar : `${sidebar.sidebar} ${sidebar.sidebarActive}`}>
                <div className={sidebar.title}>Order List</div>
                <div className={sidebar.content}>
                    <div className={sidebar.myorder}></div>
                    <div className={sidebar.orderlist}></div>
                </div>
            </div>
        </div>
        
        

    );
}

export default Sidebar; 