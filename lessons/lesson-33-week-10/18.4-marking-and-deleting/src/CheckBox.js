import React from 'react';

export default function CheckBox({ name,value,id, onChange}) {
    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <input 
            id={id}
            name={name}
            type="checkbox"
            value={value} 
            onChange={onChange}
        />
      </div>
    );
  }
