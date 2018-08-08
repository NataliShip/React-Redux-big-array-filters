import React, { Component } from 'react';
import List from './components/List';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <h1>Первая часть задания: Вывести список</h1>
        <List></List>
      </div>
    );
  }
}

export default App;


