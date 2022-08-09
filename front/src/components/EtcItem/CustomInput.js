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
    font-size: 18px;
    font-weight: 800;
    margin: 10px;
`;

const Input = styled.input`
    height: 38px;
    padding: 0px 20px;
    border-radius:0.55rem;
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
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