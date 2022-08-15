import React from "react";
import styled from "styled-components";

const InputWrap = styled.div`
    width: 70%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Label = styled.span`
    font-family: 'BMHANNAAir';
    font-size: 18px;
    font-weight: 800;
    margin: 10px;
`;

const Input = styled.input`
    background-color: #ececec;
    font-family: 'BMHANNAAir';
    height: 38px;
    padding: 0px 20px;
    border-radius:0.55rem;
    box-shadow: inset 3px 3px 7px #d3d3d3, inset -3px -3px 7px #ffffff;
    border: none;
`;


const CustomInput = ({label, placeholderText}) => {
    return (
        <InputWrap>
                    <Label>{label}</Label>
                    <Input placeholder={placeholderText}/>
        </InputWrap>
);
}
export default CustomInput;