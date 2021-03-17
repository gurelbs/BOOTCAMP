import React from 'react';

const CheckBox = ({txt,checked}) => {
    return (
        <div>
            <input 
                checked={checked}
                type="checkbox" 
                id="checkbox"></input>
            <label for="checkbox">{txt}</label>
        </div>
    );
}

export default CheckBox;
