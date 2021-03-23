import React from 'react';

const Num = ({onChange}) => {
    return (
        <div className="number">
            <input
                type='number'
                onChange={onChange}
                placeholder='how much people?'
            ></input>
        </div>
    );
}

export default Num;
