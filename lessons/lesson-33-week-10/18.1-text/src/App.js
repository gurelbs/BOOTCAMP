import './App.css';
import React, {useState} from 'react'

function App({txt,maxLength}) {
  const [hideText, setHideText] = useState(true);
  return (
      <p>
        {hideText ? txt.slice(0,maxLength) + '...' : txt}
        <button onClick={() => setHideText(!hideText)}>{hideText ? 'show more' : 'show less'}</button>
      </p>
  );
}

export default App;
