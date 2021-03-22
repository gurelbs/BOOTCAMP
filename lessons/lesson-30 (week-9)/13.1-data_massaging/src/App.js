import React, { Component } from 'react';
import Data from './Data'
export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: Data,
        }
    }
    allTheNames = () => {
        let {data} = this.state
        let names = []

        data.map((person => names.push(person.name)))
        return (
            <ul>names: {names.map(((name,i) => <li key={i}>{name}</li>))}</ul>
            )
        }
        burnBefore1990 = () => {
            let {data} = this.state
            let newData = data
                .filter(person => new Date(person.birthday).getFullYear() < 1990) 
                .map((obj,i ) => <li key={i}>{`${obj.name} ${obj.birthday}`}</li>)
                this.setState(state => {state.newData: newData})
            return (
                <ul>
                    {newData}
                </ul>
            )
            
    }
    render(){
        return (
            <div>
                {this.allTheNames()}
                {this.burnBefore1990()}
            </div>
        );
    }
}