import React from 'react';
import Avatar from './Avatar'

const Avatars = ({data}) => {
    let createAvatar = () => data.map((avatar,i) => 
        <Avatar
            key={i}
            name={avatar.name}
            phone={avatar.phone}
            email={avatar.email}
            picture={avatar.picture}
            age={avatar.age}
            gender={avatar.gender}
        />
        ) 
    return (
        <div className="avatars">{createAvatar()}</div>    
    );
}

export default Avatars;
