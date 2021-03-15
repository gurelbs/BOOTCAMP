import React from 'react';
import './card.css'

const Card = props => {
    return (
        <div className="card-wrap">
            <img src={props.imgSrc} alt="imgs"></img>
            <h1>{props.header}</h1>
            <p>{props.description}</p>
            <a href="/#">SHARE</a>
            <a href="/#">EXPLORE</a>
        </div>
    );
}

export default Card;
