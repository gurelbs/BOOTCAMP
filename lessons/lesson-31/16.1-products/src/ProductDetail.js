import React, { Component } from 'react';
import data from './store'
import Card from './Card'
class ProductDetail extends Component {
    state = {product: null}
    componentDidMount(){
        let id = Number(this.props.match.params.id)
        const findProduct = data.find(item => {
            return item.id === id
        })
        this.setState({product: findProduct})
    }
    render(){
        let {product} = this.state
        return (
            <div>
                {product && <Card data={product}/>}
            </div>
        );
    }
}

export default ProductDetail;
