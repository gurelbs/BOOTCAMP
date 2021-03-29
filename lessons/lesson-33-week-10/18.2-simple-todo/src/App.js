import './App.css';
import React, {useState} from 'react'
function App({name,completed}) {
  const [isComplete, setIsComplete] = useState(completed);
  const handleCheck = () => setIsComplete(!isComplete)
  return (
    <li
        className={`${isComplete ? 'line' : ''}`}>
          <span 
            className={`fas ${isComplete ? 'fa-user-times' : 'fa-check'}`}
            onClick={() => handleCheck()}
          />
        {name}
    </li>
  );
}

export default App;
