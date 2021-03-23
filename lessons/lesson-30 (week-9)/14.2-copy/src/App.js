import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      p: ''
    }
    this.txtAreaRef = React.createRef()
  }
  copy = () => {
    this.textArea.select()
    document.execCommand('copy')
  }
  paste = () => this.setState({p: this.textArea.value})
  render(){
    return (
      <div className="App">
        <h1>type anything you want!</h1>
        <textarea ref={textarea => this.textArea = textarea}/>
        <div>
          <button onClick={this.copy}>Copy</button>
        </div>
        <p ref={p => this.paraGraph = p}>{this.state.p || null}</p>
        <button onClick={this.paste} >paste</button>
      </div>
    );
  }
}
