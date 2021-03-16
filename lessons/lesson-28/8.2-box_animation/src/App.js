import { Component } from 'react';
import Box from './Box'
class App extends Component {
  state = { showDiv: false};

  componentDidMount(){
    setTimeout(() => {
      this.setState((state) => state.showDiv = true)
    },1000)
  }
  componentWillUpdate(){
    setTimeout(() => {
      this.setState((state) => state.showDiv = false)
    },4000)
  }
  render(){
    let boxWrap = <div>
                    <Box color="blue" width="50px" height="20px"/>
                    <Box color="green" width="100px" height="20px"/>
                    <Box color="orange" width="150px" height="20px"/>
                    <Box color="silver" width="200px" height="20px"/>
                    <Box color="gold" width="250px" height="20px"/>
                  </div>
    return (
      <div>{this.state.showDiv && boxWrap}</div>
    );
  }
}

export default App;
