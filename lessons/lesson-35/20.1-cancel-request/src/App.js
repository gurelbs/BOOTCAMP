import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState([])
  const [isFetch, setIsFetch] = useState(false)
  const [isLoad, setIsLoad] = useState(false)
  useEffect(() => {
    console.log('RUN');
    const source = axios.CancelToken.source()
    const fetchData = async () => {
      setIsLoad(true)
      try {
        let {data} = await axios.get('https://api.coingecko.com/api/v3/coins/list',{
          cancelToken: source.token,
        })
        setData(data)
        setIsLoad(false)
      } catch (error) {
        if (axios.isCancel(error)){
          console.error(`WAIT TO FETCH BEFORE REFRESH`);
        } else {
          throw error
        }
      }
    }
    if (isFetch) {
      fetchData()
    } else {
      setData([])
    }
    return () => source.cancel()
  },[isFetch])
  const handleFetchData = <ol>{data.map((coin,i) => <li key={i}>{coin.name}</li>)}</ol>
  return (
    <div>
      <button onClick={() => setIsFetch(!isFetch)}>{!isFetch ? 'fetch' : 'delete'} crypto list</button>
      {isLoad ? <div>loading...</div> : handleFetchData}
    </div>
  );
}