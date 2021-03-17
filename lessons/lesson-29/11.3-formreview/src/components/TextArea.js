import React from 'react'

const TextArea = ({name,change,value}) => {
    return (
        <div>
            <label htmlFor={name}>{name}</label>
            <textarea
                id={name}
                name={name}
                onChange={change} 
                value={value}>
            </textarea>
        </div>
        )
}

export default TextArea