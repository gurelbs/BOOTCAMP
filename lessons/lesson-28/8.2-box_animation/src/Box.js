import React from 'react';
import './box.css'
const Box = (props) => {
    return (
        <div className="box" style={{
            backgroundColor: props.color,
            width: props.width,
            height: props.height
            }}>
        </div>
    );
}

export default Box;
