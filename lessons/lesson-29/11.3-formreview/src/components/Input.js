import React from 'react';

const Input = ({type,name,txt,change,value}) => {
    return (
        <div>
            <label>{txt}</label>
                <input 
                    name={name}
                    type={type} 
                    onChange={change} 
                    value={value}>
                </input>
            </div>  
    );
}

export default Input;
