import React from 'react';

const CustomButton = ({color,changeCurrentColor}) => {
    return (<button 
                style={{backgroundColor: color}}
                onClick={changeCurrentColor}
                >
            {color}</button>
    );
}

export default CustomButton;
