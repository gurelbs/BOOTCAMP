import './App.css';
import React, {Component} from 'react'
class App extends Component {
  state = { 
    favoriteColor: ' blue'
  }
  componentDidMount(){
    setTimeout( () => this.setState(
      {favoriteColor: ' green'}
    ),2000)
  }
  componentDidUpdate(){
      let p = document.createElement('p')
      p.innerHTML = `The updated favorite color is ${this.state.favoriteColor}`
      let app = document.querySelector('.App')
      app.appendChild(p)

  }
  render(){
    let {favoriteColor} = this.state
    return (
      <div className="App">
        <h1>My favorite color is 
          <span style={{color: favoriteColor}}>
            {favoriteColor}
          </span>
        </h1>
      </div>
    );
  }
}

export default App;
