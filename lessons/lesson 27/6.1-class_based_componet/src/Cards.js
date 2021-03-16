import React, {Component} from 'react';
import Card from './Card'
import './style.css'
class Cards extends Component {
    render() {
        console.log(this.props.name);
        return (
            <div className="cards-wrap">
                <Card 
                    name='user name 1'
                    imgSrc='https://source.unsplash.com/random/100x100'
                    description='some description nice'
                    linkName1='update'
                    linkName2='delete'
                    />
                <Card 
                    name='user name 2'
                    imgSrc='https://source.unsplash.com/random/100x101'
                    description='some description cool'
                    linkName1='btn 1'
                    linkName2='btn 2'
                    />
                <Card 
                    name='user name 3'
                    imgSrc='https://source.unsplash.com/random/100x102'
                    description='some description very cooooooool'
                    linkName1='yes'
                    linkName2='no'
                />
            </div>
        );
    }
    }
export default Cards;
