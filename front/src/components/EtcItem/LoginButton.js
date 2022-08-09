import React from "react";
import styled from "styled-components";

const BtnStyle = styled.button`
    margin-top: 40px;
    background-color: white;
    font-weight: 800;
    width: 70%;
    height: 38px;
    border-radius: 0.55rem;
    box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
    border: none;
    &:hover{
        box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
    }
    cursor: pointer;
`;


const LoginButton = ({btnlabel}) => {
    return (
            <BtnStyle>{btnlabel}</BtnStyle>       
);
}
export default LoginButton;