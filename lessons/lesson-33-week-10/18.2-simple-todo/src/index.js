import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import data from './data.js'
ReactDOM.render(
  <React.StrictMode>
    <ul>
      {data.map((item,i) => <App key={i} name={item.name} completed={item.completed}/>)}
    </ul>
  </React.StrictMode>,
  document.getElementById('root')
);