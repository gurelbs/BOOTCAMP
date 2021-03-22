import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './Homepage'
import Products from './Products'
import ProductDetail from './ProductDetail'

import NotFound from './404'
import Header from './Header'
import './App.css';

export default class App extends Component {
  render (){
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/products' exact component={Products} />
            <Route path='/products/:id' exact component={ProductDetail} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
