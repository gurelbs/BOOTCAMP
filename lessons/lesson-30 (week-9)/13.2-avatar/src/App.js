import React,{ Component } from 'react';
import './App.css';
import axios from 'axios'
import Avatars from './Avatars' 
import Input from './Input' 
import Spinner from './Spinner' 

export default class App extends Component{
  state = { 
    data: [],
    inputValue: '',
    resultNumber: 0
  }
  fetchData = () => 
    axios.get(`https://randomuser.me/api/?results=${this.checkIfValidNumber() || 50}`)
         .then(res => {
           const avatars = res.data.results.map((avatar,i) => {
             return {
              key: i,
              name: `${avatar.name.first} ${avatar.name.last}`,
              title: `${avatar.name.title}`, 
              phone: avatar.phone,
              email: avatar.email,
              picture: avatar.picture.large,
              age: avatar.dob.age,
              gender: avatar.gender
             }
            });
           this.setState({data: avatars})
         })

  componentDidMount(){
    this.fetchData()
  }
  handleInputChange = (e) => {
    this.setState({inputValue: e.target.value})
  }
  handleSyncClicked = () => {
    this.fetchData()
  }
  handleNumOnChange = (e) => {
    this.setState({resultNumber: e.target.value})
    this.checkIfValidNumber()
  }
  checkIfValidNumber = () => {
    return this.state.resultNumber > 0 && this.state.resultNumber < 5000
    ? this.state.resultNumber
    : null
  }
  render(){
    let { data,inputValue } = this.state
    const filterData = 
      [...data].filter(avatar => 
        avatar.name.toLowerCase().startsWith(inputValue.toLowerCase()))
    return (
      <div className="App">
        {data.length !== 0 
        ? <div>
          <Input 
            value={inputValue}
            onChange={this.handleInputChange}
            syncClicked={this.handleSyncClicked}
            numOnChange={this.handleNumOnChange}
          />
          {console.log(this.state.resultNumber)}
          <Avatars data={filterData}/>
        </div>
        : <Spinner/>}
      </div>
    );
  }

}