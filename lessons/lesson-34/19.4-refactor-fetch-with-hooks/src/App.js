import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function App() {

  const [randomeJokeURL, setRandomeJokeURL] = useState(`https://api.chucknorris.io/jokes`)
  const [randomeJoke, setRandomeJoke] = useState(``)
  const [categories, setCategories] = useState([])
  const [randomJokeByCategory, setRandomJokeByCategory] = useState('dev')
  const [JokeByCategory, setJokeByCategory] = useState('')
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading1(true)
      const { data } = await axios.get(`${randomeJokeURL}/random`)
      const { value } = data
      setRandomeJoke(value)
      setIsLoading1(false)
    }
    fetchData()
  },[randomeJokeURL])
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading2(true)
      const { data } = await axios.get(`${randomeJokeURL}/categories`)
      setCategories(data);
      setIsLoading2(false)
    }
    fetchData()
  },[])
  useEffect(() => {
    const fetchDataByCategory = async () => {
      setIsLoading3(true)
      const { data } = await axios.get(`${randomeJokeURL}/random?category=${randomJokeByCategory}`)
      const {value} = data
      setJokeByCategory(value)
      setIsLoading3(false)
    }
    fetchDataByCategory()
  },[randomJokeByCategory])
  return (
    <div className="App">
        {isLoading1 ? <div className="spinner"/> : 
          <div className="randomeJoke">
            <h1 className="randomeJoke-header">{randomeJoke}</h1>
            <button 
              onClick={() => setRandomeJokeURL(`${randomeJokeURL}/`)}>
            click to show randome joke</button>
          </div>
        }
        {isLoading2 ? <div className="spinner"/> : <div>
          <ul className="categories-btns">
            {categories.map((item,i) => {
              return <button 
                key={i} 
                onClick={() => setRandomJokeByCategory(item)}>
              {item} JOKE</button>
            })}
          </ul>
          {isLoading3 ? <div className="spinner"/> : <h1>{JokeByCategory}</h1>}
        </div>
        }
    </div>
  );
}