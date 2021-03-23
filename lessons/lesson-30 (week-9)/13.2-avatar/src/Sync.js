import React from 'react';

const Sync = ({clicked}) => {
    return (
        <div className="sync-wrap">
            <i 
                className="fas fa-sync"
                onClick={clicked}
            ></i>
        </div>
    );
}

export default Sync;
