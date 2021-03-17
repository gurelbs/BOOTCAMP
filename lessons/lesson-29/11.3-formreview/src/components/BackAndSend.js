import React from 'react';

const BackAndSend = ({edit,send}) => {
    return (
        <div className='btn-wrap'>
            <button className="btn" onClick={edit}>edit</button>
            <button className="btn" onClick={send}>sand</button>
        </div>
    );
}

export default BackAndSend;
