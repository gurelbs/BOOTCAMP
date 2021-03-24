import React from 'react';

const CreateUserBox = ({saveName,saveEmail,saveUserName,submitNewUser}) => {
    return (
        <div>
            <div>
                <label htmlFor='fullName'>full name:</label>
                <input 
                    type='txt' 
                    id='fullName'
                    onChange={saveName}
                />
            </div>
            <div>
                <label htmlFor='email'>email:</label>
                <input type='email' id='email' onChange={saveEmail}></input>
            </div>
            <div>
                <label htmlFor='username'>username:</label>
                <input type='txt' id='username' onChange={saveUserName}></input>
            </div>
            <button onClick={submitNewUser}>create new user</button>
        </div>
    );
}

export default CreateUserBox;
