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
    <div className={'list'}>
      <h1 className={'list__header'}>Первая часть задания: Вывести список</h1>
      <h2 className={'list__subheader'}>Список</h2>
      <ul className={'list__generated-list'}>
        {this.props.array ? this.props.array.map((item, index) =>
          <li key={index} className={'list__item'}><b>label:</b> <span>{item['label']}</span> <b>value:</b> <span>{item['value']}</span></li>) : ''}
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


