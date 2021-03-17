import React, { Component } from 'react';
import Input from './Input'
import TextArea from './TextArea'
import Continue from './Continue'
import BackAndSend from './BackAndSend'

export default class Form extends Component {
    state = {
        isContinue: false
    }
    handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state)
    }
    handleEditBtn = e => {
        this.setState({isContinue: false})
    }
    showData = () => {
        return (
            <div className="details">
                {console.log(this.state)}
                <h1>here is your details:</h1>
                <p><span className="yellow">first name:</span> {this.state.firstName}</p>
                <p><span className="yellow">last name:</span> {this.state.lastName}</p>
                <p><span className="yellow">age:</span> {this.state.age}</p>
                <p><span className="yellow">free text:</span> {this.state.freeText}</p>
            </div>
        )
    }
    handleContinueBtn = (e) => {
        e.preventDefault()
        console.log(e.target);
        this.setState({isContinue: true})
    }
    render(){
        const {isContinue,firstName,lastName,age} =  this.state
        return (
            <form>
                <Input 
                    type='text' 
                    name='firstName' 
                    txt='First Name'
                    value={firstName}
                    change={this.handleChange}
                    />
                <Input 
                    type='text' 
                    name='lastName'
                    txt='Last Name'
                    value={lastName}
                    change={this.handleChange}
                    />
                <Input 
                    type='number' 
                    name='age' 
                    txt='age'
                    value={age}
                    change={this.handleChange}
                    />
                <TextArea 
                    name='freeText'
                    change={this.handleChange}
                />
                {!isContinue ? <Continue clicked={this.handleContinueBtn} /> : this.showData()}
                {isContinue && <BackAndSend 
                        edit={this.handleEditBtn}
                        send={this.handleSendBtn}
                    />}
            </form> 
        );  
    }
}
