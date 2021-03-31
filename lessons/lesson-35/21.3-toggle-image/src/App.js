import './App.css';
import Img from './Img';
import React from 'react'

export default function App() { 
  let renderImg = [1,2,3,4].map( (i,j) => <Img key={j} src={`https://source.unsplash.com/300x30${i}/?nature`}/>)
  return (
    <>
      {renderImg}
       <button onClick={() => window.location.reload(false)}>Click to reload random image</button>
    </>
  );
}