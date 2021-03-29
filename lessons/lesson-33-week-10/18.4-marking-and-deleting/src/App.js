import React,{useState} from 'react'
import './App.css';
import CheckBox from './CheckBox';

function App() {

  const dataArr = [
    {id: 1,name:"one", value:false},
    {id: 2,name:"two", value:false},
    {id: 3,name:"three", value:false},
    {id: 4,name:"four", value:false},
    {id: 5,name:"five", value:false},
];
  const [data, setData] = useState(dataArr)
  const handleDelete = () => {
    const newData = data.filter(item => !item.value)
    setData(newData)
  }
  const handleReset = () => {
    const resetData = [...dataArr]
    setData(resetData)
  }

  const handleChange = (e) => {
    let id = e.target.id
    const newData = data.map(item => item.id === parseInt(id) ? {
        ...item,
        value: !item.value
      } : item
    )
    setData(newData)
  }
  return (
    <div className="App">
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleReset}>reset</button>
      {data.map( item => 
          <CheckBox
            key={item.id}
            id={item.id}
            name={item.name}
            value={item.value}
            onChange={handleChange}
          />
      )}
    </div>
  );
}

export default App;
