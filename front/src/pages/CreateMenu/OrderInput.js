import React from "react";
import * as style from "./styles";


const OrderInput = ({label, placeholder, type, name, value, onChange}) => {
    
    return(
        <style.MenuWrap>
            <span>{label}</span>
            <style.MenuInput 
                name={name} 
                value={value} 
                type={type} 
                placeholder={placeholder}
                onChange={onChange}
            />
        </style.MenuWrap>
    );
}

export default OrderInput;