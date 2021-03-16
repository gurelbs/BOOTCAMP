import React, { Component } from 'react';
import './App.css';
import Spiner from './Spiner'
class App extends Component {
  state = {timer: 5}

  componentDidMount(){
    setInterval(() => {
      this.setState({timer: this.state.timer - 1})
    }, 1000);
    console.log(this.state.timer);
  }

  render(){
    let {timer} = this.state
    return (
      <div>
        {timer > 0 ? <Spiner/> : null}
        <h1>{timer > 0 ? timer : null}</h1>
      </div>
    );
  }
}

export default App;
