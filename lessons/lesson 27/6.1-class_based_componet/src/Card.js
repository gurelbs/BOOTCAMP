import React,  {Component} from 'react';
import './style.css'

class Card extends Component {
    render () {
        let {imgSrc,name,description,linkName1,linkName2} = this.props
        return(
        <div className="card-wrap">
            <img alt="img" src={imgSrc}></img>
            <h1>hello {name}</h1>
            <p>{description}</p>
            <a href="/#">{linkName1}</a>
            <a href="/#">{linkName2}</a>
        </div>
        )
    }
}
export default Card;
