import './App.css';
import React, { Component } from 'react'
import API from './api'
import CreateBtn from './CreateBtn'
import Card from './Card'
export default class App extends Component {
  state = {
    createCard: false,
    users: [],
    newUser: {
      cardIsEdit: false,
      name: '',
      email: '',
      username: '',
    }
  }
  getFromApi = async () => await API.get('people').then(res => this.setState({users: res.data}))
  handleopenCardCreate = () => this.setState({createCard: !this.state.createCard})
  async componentDidMount(){
    await API.get('people').then(res => this.setState({users: res.data}))
  }
  handleSave = (e,val) => {
    if (e.target.value.length > 0){
      console.log(e.target.value);
      this.setState(state => ({
        ...state,
        newUser: {
          ...state.newUser,
          [val]: e.target.value
        }
      }))
    }
  }
  createRandomImg = () => {
    let random = () => Math.floor(Math.random() * 99)
    return `https://source.unsplash.com/1600x8${random()}/?nature`
  };
  handleSaveName = (e) => {
    return this.handleSave(e,'name')
  }
  handleSaveUserName = (e) => {
    return this.handleSave(e,'username')
  }
  handleSaveEmail = (e) => {
    return this.handleSave(e,'email')
  }
  handleCreateNewUser = () => {
    let {newUser} = this.state
    if (!newUser.name.length < 1 && !newUser.email.length < 1 && !newUser.username.length < 1){
      API.post('/people', this.state.newUser)
      return this.setState(state => {
        return {
          ...state,
          createCard: false,
          users: [
          ...state.users,
          {
            ...state.newUser,
            id: state.users.length+1
          }
        ],
        newUser: {
          name: '',
          email: '',
          username: '',
          id: state.users.length+1
        }}
      })
    }
  }
  deleteBtn =  async (id) => {
    await API.delete(`people/${id}`)
    let users = this.state.users.filter(user => user.id !== id)
    this.setState({ users: users})
    return this.getFromApi()
  }
  render(){
    return (
      <div className="App">
        <h1>all users</h1>
        <CreateBtn 
          isClicked={this.state.createCard} 
          openCardCreate={this.handleopenCardCreate}
          saveName={this.handleSaveName}
          saveEmail={this.handleSaveEmail}
          saveUserName={this.handleSaveUserName}
          createNewUser={this.handleCreateNewUser}
        />
        <div className="cards-wrap">
          {this.state.users.map( user => {
            return (
            <div key={user.id}>
               <Card
                user={user}
                img={this.createRandomImg()}
                deleteBtn={() => this.deleteBtn(user.id)}
                />
            </div>)
          })}
        </div>
      </div>
    );
  }
}
