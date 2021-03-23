import React from 'react';

const Avatar = ({name,phone,email,picture,age,gender}) => {
    return (
        <div className="avatar">
            <h1 className="name">{name}</h1>
            <p>
                <span className="phone">{phone}</span>
                <span className="email">{email}</span>
                <span className="age">{age}</span>
                <span className="gender">{gender}</span>
            </p>
            <img  className="user-img" src={picture}></img>
        </div>
    );
}

export default Avatar;
