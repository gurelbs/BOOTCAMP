import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios'

export default function App() {

  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const [url, setUrl] = useState(`https://hn.algolia.com/api/v1/search?query=hooks`)
  const [isLoad, setIsLoad] = useState(false)
  const [isErr, setIsErr] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoad(true)
      setIsErr(false)
      try {
        let { data } = await axios.get(url)
        const { hits } = data
        setData(hits)
        setIsLoad(false)
      } catch (error) {
        setIsErr(true)
      }
    }
    fetchData()
  },[url])

  const searchByEnter = (e) => {
    if (e.key === 'Enter'){
      setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
    }
  }
  return (
    <>
      <input
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={searchByEnter}
        placeholder="search something..."
      />
      <button onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}>search</button>
        {isErr && <div>ERR...</div>}
        {isLoad ? <div className='spinner'></div> :
        data.map((item,i) => {
          return (
              <div className="container" key={i}>
                <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a>
              </div>
            )
        })}
    </>
  );
}
