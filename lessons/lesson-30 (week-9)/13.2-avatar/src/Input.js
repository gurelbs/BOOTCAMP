import React from 'react';
import Sync from './Sync'
import Num from './Num'
const Input = ({value,onChange,numOnChange,syncClicked}) => {
    return (
        <div className="input-wrap">
          <input 
            type="text"
            value={value}
            onChange={onChange}
            placeholder="type some name to filter..." 
            autoFocus
        ></input>
            <Num onChange={numOnChange}/>
            <Sync clicked={syncClicked}/>
        </div>
         
    );
}

export default Input;
