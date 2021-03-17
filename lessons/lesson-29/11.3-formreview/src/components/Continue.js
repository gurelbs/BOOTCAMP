import React from 'react';

const Continue = ({clicked}) => {
    return (
        <div className='btn-wrap'>
            <button  className='btn' type='submit' onClick={clicked}>CONTINUE</button>
        </div>
    );
}

export default Continue;
