import React from 'react';
import './App.css'
const Button = (props) => {
    return (
        <button style={props.styles}>{props.txt}</button>
    );
}

export default Button;
