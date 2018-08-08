import React, { Component } from 'react';
import './list.css';
import * as actions from "../store/actions";
import {connect} from "react-redux";

class List extends Component {

  componentDidMount() {
    this.props.dispatch(actions.generateArray())
  }

  render() {
    return (
    <div>
      <h2>Список</h2>
      <ul>
        {this.props.array ? this.props.array.map((item, index) => <li key={index}>{item}</li>) : ''}
      </ul>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    array: state.mainReducer.generatedArray
  }
}

export default connect(mapStateToProps)(List);


