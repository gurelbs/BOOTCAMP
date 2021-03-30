import './App.css';
import React,{useState,useEffect} from 'react'
import axios from 'axios'
function App() {
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')

  const fetchData = async () => {
    const {data} = await axios.get('https://restcountries.eu/rest/v2/all')
    const countries = data.map(country => country.name)
    setCountry(countries)
  }
  useEffect(() => {
    fetchData()
  },[])

  const handleChange = (e) => {
      let el = e.target.value.trim().toLowerCase()
      setSearch(el)
      return country.length !== 0 ? filterArr() : fetchData()
  }
  const filterArr = () => {
    const filterCountry = country.filter( name => name.toLowerCase().startsWith(search))
    return setCountry(filterCountry)
  }
  const result = country.map((name,i) => {
      return (
        <div key={i}>
          <li className="li">{name}</li>
        </div>
        )
    })
  return (
    <div className="App">
      <input 
        autoFocus
        type="search" 
        placeholder="search..."
        value={search}
        onChange={e => handleChange(e)}
      />
      <div>
        {result}
      </div>
    </div>
  );
}

export default App;
