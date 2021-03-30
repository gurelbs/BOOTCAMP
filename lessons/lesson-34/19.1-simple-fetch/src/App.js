import axios from 'axios'
import React,{useState, useEffect } from 'react'
import './App.css';


export default function App() {
  const [movie, setMovie] = useState({})
  const search = async () => {
    const random = () => Math.floor(Math.random() * 5) + 1 || 1
    const { data } = await axios.get(`https://swapi.dev/api/films/${random()}/`)
    setMovie({
      title: data.title,
      director: data.director,
    })
  }
  useEffect(() => {
    search()
  },[])
  return (
    <div className="App">
      <h1>{movie.title}</h1>
      <h4>{movie.director}</h4>
      <button onClick={search}>refresh</button>
    </div>
  );
}