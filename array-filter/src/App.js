import React, { Component } from 'react';
import List from './components/List';
import Filter from './components/Filter';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <List></List>
        <Filter></Filter>
      </div>
    );
  }
}

export default App;


