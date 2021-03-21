import './App.css';
import React from 'react'
import axios from 'axios' 

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      randomJoke: '',
      categories: [],
      randomJokeByCategory:  ""
    }
  }
  handleRandomJoke = () => {
    axios.get('https://api.chucknorris.io/jokes/random')
    .then(res => this.setState( state => ({
      ...state,
      randomJoke: res.data.value
      
    }) ))
  }
    JokeCategory = () => {
      axios.get('https://api.chucknorris.io/jokes/categories')
      .then(res => {

        this.setState(state => ({
          ...state,
          categories: [...res.data]
        }))
        console.log(this.state.categories);
      })
    }
    JokeByCategory = (e) => [
      axios.get(`https://api.chucknorris.io/jokes/random?category=${e.target.value}`)
      .then((res => {
        console.log(res.data.value);
        this.setState(state => ({
          ...state,
          randomJokeByCategory: res.data.value
        }))
      }))
    ]
  render(){
    let {randomJoke,categories,randomJokeByCategory} = this.state
    return (
      <div className="App">
        <div className="random-joke">
          <button
            className="btn" 
              onClick={this.handleRandomJoke}>
            random chuck joke
            </button>
            <h1>{randomJoke}</h1>
        </div>
         { <div className='category'>
            <div>
              <button 
                className='btn btn-category'
                onClick={this.JokeCategory}>
                  show by category
              </button>
              <ul className="category-list">
                  {categories.map((item,i ) => 
                  <button 
                  key={i}
                  className="item btn"
                  value={item}
                  onClick={this.JokeByCategory}
                  >{item}</button>)}
              </ul>
                  <h1 className="random-joke-h1">{randomJokeByCategory}</h1>
            </div>
        </div> }
      </div>
    );

  }
}
