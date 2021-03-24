import React from 'react';
import Button from './Button'

let CreateFirstCards = ({data,updateBtn,deleteBtn}) => {
    let createRandomImg = (x) => `https://source.unsplash.com/${x}/?nature`;
    return data.map( people => {
        let imgSize = `1600x8${people.id < 10 ? '0'+people.id : people.id}`
        let price = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format(people.price)
        return (
        <div className="card">
          <h1>{price}</h1>
          <img src={createRandomImg(imgSize)} alt={`img-${people.id}`}></img>
          <Button
            txt='Update'
            cn='update-btn'
            clicked={updateBtn}
          />
          <Button
            txt='Delete'
            cn='delete-btn'
            clicked={deleteBtn}
          />
        </div>
        )
      })
}
export default CreateFirstCards