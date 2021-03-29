import React from 'react';

const Input = ({name,value,onChange}) => {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <input 
                id={name}
                onChange={onChange}
                value={value}
                type='number'
                name={name}
            />
        </div>
    );
}

export default Input;
