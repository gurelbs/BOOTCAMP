import './App.css';
import React, {Component} from 'react'
class App extends Component {
  state = {
    circle:'circle',
    active: false,
    color: ['blue','green','black','yellow','red','pink','orange','aqua'],
    random: () => Math.floor(Math.random() * this.state.color.length),
    currentColor: null,
    counter: 0
  }
  componentDidMount(){ 
    setInterval(() => {
      this.setState({
        currentColor: this.state.color[this.state.random()],
        counter: this.state.counter + 1,
        active: this.state.counter % 5 === 0 ? true : false
      })
    }, 500);
    
  }
  render(){
    const {currentColor,circle,active} = this.state
    return (
      <div 
      style={{backgroundColor: currentColor}}
      className={`box ${active && circle}`}
      >
  
      </div>
    );
  }
}

export default App;
