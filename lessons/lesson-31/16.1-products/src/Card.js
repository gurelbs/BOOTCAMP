import React from 'react';
import {Link} from 'react-router-dom'
const Card = ({data}) => {
    return (
        <div className='card'>
            <h1>{data.title}</h1>
            <h2>{data.price}$</h2>
            <p>{data.size}</p>
            <img 
                src={data.imageUrl} 
                alt={data.title
                    .split(' ')
                    .join('-')
                    .toLowerCase()}>
            </img>
            <Link to='/products'>back</Link>
        </div>
    );
}

export default Card;
