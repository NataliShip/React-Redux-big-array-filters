import React, { Component } from 'react';
import List from './components/List';
import './App.css';
import {connect} from "react-redux";
import * as actions from './store/actions';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(actions.generateArray())
  }

  render() {
    return (
      <div className="App">
          <h1>Первая часть задания: Вывести список</h1>
        <div>{this.props.array}</div>
        <List></List>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    array: state.generatedArray
  }
}

export default connect(mapStateToProps)(App);


