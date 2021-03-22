import React, { Component } from 'react';
import Data from './Data'
import Name from './Name'
import Card from './Card'
import './App.css'
export default class App extends Component{
    state = { 
        data: Data,
        burnBefore1990 : [],
        burnAfter1990 : [],
    }
    componentDidMount(){
        let { data } = this.state
        this.setState({
            ...this.state,
            burnBefore1990: data.filter(person => new Date(person.birthday).getFullYear() < 1990),
            burnAfter1990: data.filter(person => new Date(person.birthday).getFullYear() >= 1990)
        })
    }
    allTheNames = () => 
        this.state.data.map(( (person,i) => 
        <Name key={i} name={person.name}/>))

    burnBefore1990 = () => {
        let {burnBefore1990} = this.state
        return burnBefore1990.map((person,i) => 
        <li key={i}>
            {Object.values(person).slice(0,2).join(' ---> ')}
        </li>)
    }
    burnAfter1990 = () => {
        let {burnAfter1990} = this.state
        return burnAfter1990.map((person,i) => 
        <li key={i}> 
            {Object.values(person).slice(0,2).join(' ---> ')}
        </li>)
    }
    renderCardDetails = () => {
        return this.state.burnBefore1990.map((person,i) => 
            <Card
                key={i}
                name={person.name}
                birthday={person.birthday}
                favoriteFish={person.favoriteFoods.fish.join(', ')}
                favoriteMeats={person.favoriteFoods.meats.join(', ')}
            />
            )
        }
    render(){
        return (
            <div>
                <h1>all data: </h1>
                {JSON.stringify(this.state.data)}
                <div>
                    <div>
                        <h2>allTheNames</h2>
                        <ul>{this.allTheNames()}</ul>
                    </div>    
                    <div>
                        <h2>burnBefore1990</h2>
                        <ul>
                            {this.burnBefore1990()}
                        </ul>
                    </div>    
                    <div>
                        <h2>burnAfter1990</h2>
                        <ul>
                            {this.burnAfter1990()}
                        </ul>
                    </div>
                    <div className='card'>{this.renderCardDetails()}</div> 
                </div>
            </div>
        );
    }
}