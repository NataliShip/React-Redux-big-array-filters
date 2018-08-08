import React, { Component } from 'react';
import { connect } from 'react-redux';
import './list.css';

class List extends Component {
  render() {
    return (
    <h2>Список</h2>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(List);