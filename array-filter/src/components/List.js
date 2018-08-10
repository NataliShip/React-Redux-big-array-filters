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
      <input className={'list__add'} type="text" placeholder={'Добавить элемент к массиву'}/>
      <ul className={'list__generated-list'}>
        {this.props.array ? this.props.array.map((item, index) => {
          if(item['label'] && item['value']) {
            return (
            <li key={index} className={'list__item'}>
              <b>label:</b> <span>{item['label']}</span> <b>value:</b> <span>{item['value']}</span>
              <i className={'list__change'}></i>
              <i className={'list__delete'}></i>
            </li>
            )} else if (typeof item !== 'object') return (
            <li key={index} className={'list__item'}>{item}</li>
          )}) : ''}
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


