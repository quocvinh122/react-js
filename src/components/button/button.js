import React from 'react';
// import "./Button.scss";
import "./Button.module.css";
const button = (props) => {
    return (
        <button className={`button ${props.className}`}>
            {props.children}
        </button>
    );
};

export default button;