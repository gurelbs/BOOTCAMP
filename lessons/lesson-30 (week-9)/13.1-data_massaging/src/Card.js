import React from 'react';

const Card = ({name,birthday,favoriteFish,favoriteMeats}) => {
    return (
        <div>
            <h1>name: {name}</h1>
            <h4>birthday: {birthday}</h4>
            favoriteFoods: 
            <ul>
                favoriteFish:
                {favoriteFish}
            </ul>
            <ul>
                favoriteMeats:
                {favoriteMeats}
            </ul>
        </div>
    );
}

log
export default Card;
