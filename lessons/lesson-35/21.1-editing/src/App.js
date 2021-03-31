import './App.css';
import React,{ useEffect, useState, useRef } from 'react'

export default function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [txt, setTxt] = useState('');
  const inputRef = useRef(null)
  const handleClick = () => {
    setIsEdit(!isEdit)
  }
  useEffect(() => {
    if (inputRef.current){
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  },[isEdit])
  return (
    <div className="App">
        {isEdit && 
        <input
          ref={inputRef}
          placeholder="type ypur name..."
          value={txt}
          onChange={e => setTxt(e.target.value)}
        />}
        <button
          onClick={(handleClick)}>{!isEdit ? 'edit' : 'save'}
        </button>
        <p>{!isEdit ? txt : ''}</p>
    </div>
  );
}
