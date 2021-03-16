import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Cards from './Cards'
class App extends Component {
    render(){
        return <Cards />
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))
