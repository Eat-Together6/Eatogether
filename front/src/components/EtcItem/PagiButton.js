import React from "react";
import styled from "styled-components";

const BtnStyle = styled.button`
    font-family: 'BMHANNAPro';
    background-color: #ececec;
    font-weight: 800;
    width: 38px;
    height: 38px;
    border-radius:0.55rem;
    box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #ffffff;
    border: none;
    &:hover{
        box-shadow: inset 3px 3px 7px #d3d3d3,
        inset -3px -3px 7px #ffffff;
    }
    cursor: pointer;
`;

const PagiButton = ({btnlabel}) => {
    return (
        <BtnStyle>{btnlabel}</BtnStyle>
);
}
export default PagiButton;