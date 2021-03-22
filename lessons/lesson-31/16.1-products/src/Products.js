import React, { Component } from 'react';
import data from './store'
import { Link } from 'react-router-dom'

export default class Products extends Component {
    state = {data: []}
    componentDidMount(){
        this.setState({data})
    }
    renderProduct = () => {
        let { location } = this.props
        let { data } = this.state
        return data.map(product => (
        <div className="mini-products-card"  
             key={product.id}>
            <img src={product.imageUrl} 
                 alt="img"/>
            <Link
                className="product-link"
                to={`${location.pathname}/${product.id}`}>
                {product.title}
            </Link>
        </div>
            ))
        }
    render(){ 
        return (
            <div 
                className="products-wrap">
                    {this.renderProduct()}
            </div>
        );
    }
}