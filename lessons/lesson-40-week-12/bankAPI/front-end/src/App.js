import React,{useEffect, useState} from 'react'
import api from './api/api.js'
export default function App() {
  const [userData, setUserData] = useState({})
  const [txt, setTxt] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await api.get('/users')
      console.log(data);
      setUserData(data)
    }
    fetchData()
  },[userData.name])

  const sendData = async () => {
      const trimName = txt.trim()
      if (trimName.length > 0){
        const {data} = await api.post('/create', {name: trimName})
        setUserData(data)
      }
  }
  return (
    <div>
          <input 
            type="text"
            placeholder="send your name"
            value={txt}
            onChange={e => setTxt(e.target.value)}
          />
          <button type="submit" onClick={sendData}>send</button>
          <p>{txt}</p>
          <h1>{userData.name}</h1>
    </div>
  );
}