import './App.css';
import React, { Component } from 'react'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userWrite: ''
    }
    this.txtInput = React.createRef()
  }

  focus = () => this.txtInput.current.focus()
  componentDidMount(){
    this.focus()
  }
  handleWrite = (e) => {
    this.setState({userWrite: e.target.value})
  }
  render(){
    return (
      <div className="App">
        <input 
          type="text"
          value={this.state.userWrite}
          ref={this.txtInput}
          onChange={this.handleWrite}
        />
        <p>{this.state.userWrite}</p>
      </div>
    );
  }
}

export default App;
