import React, { Component } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import FunctionClick from './components/eEventHandling/FunctionClick';
import ClassClick from './components/eEventHandling/ClassClick';
import FragmentDemo from './components/fragments/FragmentDemo';
import Table from './components/fragments/Table';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Route path='/' exact component={Home} />
          <Route path='/ClassClick' component={ClassClick} />
          <Route path='/FunctionClick' component={FunctionClick} />
          <Route path='/Table' component={Table} />
          <Route path='/FragmentDemo' component={FragmentDemo} />                          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
