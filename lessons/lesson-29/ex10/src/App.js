import { Component } from 'react';
import CustomButton from './CustomButton'
import './App.css';

export default class App extends Component {
  state = {currentColor: ''}
  render(){
    const colors = ['blue','red','yellow'];
    let btn = colors.map((item,i) => 
    <div 
      key={i}>
        <CustomButton 
          color={item} 
          changeCurrentColor={e => {
            this.setState({currentColor: item})
      }}/>
    </div>)
    return (
      <div className="App">
        <div>{btn}</div>
        <h1>the current color is: {this.state.currentColor}</h1>
      </div>
    );
  }
}