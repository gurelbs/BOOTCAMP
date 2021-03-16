import React, { Component } from 'react';
import './style.css'
class App extends Component {
        state = {
            max: 10,
            min: -10,
            defaultValue: 0,
        }
        plusBtn = () => {
            this.setState(state => (
                state.defaultValue < state.max ?
                {defaultValue:  state.defaultValue+1} :
                null 
            ))
        };
        minusBtn = () => {
            this.setState(state => (
                state.defaultValue > state.min ?
                {defaultValue:  state.defaultValue-1} :
                null 
            ))
        }
    render(){
        let {max,min,defaultValue} = this.state;
        return (
            <div className="input-wrap">
                <input 
                    type="range" 
                    min={min} 
                    max={max} 
                    value={defaultValue}
                    defaultValue={defaultValue}>
                </input>
                <br/>
                <label style={
                    this.state.defaultValue > 0
                    ? {color: 'green'}
                    : this.state.defaultValue === 0 
                    ? {color: 'black'}
                    : {color: 'red'}
                }>{defaultValue}</label>
                <div className="btn-wrap">
                    <button onClick={this.minusBtn}>-</button>
                    <button onClick={this.plusBtn}>+</button>
                </div>
            </div>
        );
    }
}

export default App;
