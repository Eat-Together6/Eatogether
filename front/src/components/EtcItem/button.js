import React from "react";
import './button.module.css';

const Button = ({label}) => {
    return (
        <div>
            <button className={'&{style.button}'}>{label}</button>
        </div>
    );
}

export default Button;