import React from 'react';
import Button from './Button'

const Card = ({user,img,deleteBtn,id,onChange}) => {
    return (
        <div className="card" id={id}>
            <h1>{user.name}</h1>
            <p>username: 
              <button 
                onChange={onChange}
                contentEditable>{user.username}</button>
            </p>
            <p>email: 
              <button 
                onChange={onChange}
                contentEditable>{user.email}</button>
            </p>
            <img src={img} alt={`img`}></img>  
          <Button
            txt={'delete'}
            cn='delete-btn'
            clicked={deleteBtn}
          />
        </div>
    );
}

export default Card;
