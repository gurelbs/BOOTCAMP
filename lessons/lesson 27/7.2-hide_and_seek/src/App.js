import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {btnIsClick: false}
  }
  handleClick = () => {
    this.setState(state => ({btnIsClick: !state.btnIsClick}))
    console.log(this.state.btnIsClick);
  }
  render(){
    return (
      <div className="App">
        <button onClick={this.handleClick}>click me</button>
        {this.state.btnIsClick && <div style={{
          backgroundColor: 'yellow', 
          height: '15vw', 
          width: '15vw',
          border: '1px solid black',
          margin: '1vw auto'}}>
        </div>}
      </div>
    );
  }
}
