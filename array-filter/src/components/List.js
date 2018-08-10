import React, { Component } from 'react';
import './list.css';
import * as actions from "../store/actions";
import {connect} from "react-redux";

class List extends Component {

  componentDidMount() {
    this.props.generateArray()
  }

  render() {
    return (
    <div className={'list'}>
      <h1 className={'list__header'}>Первая часть задания: Вывести список</h1>
      <h2 className={'list__subheader'}>Список</h2>
      <input className={'list__add'} id={'add-input'} type="text" placeholder={'Добавить элемент к списку'}/>
      <button className={'list__btn'} onClick={() => { const input = document.getElementById('add-input');
      this.props.addArrayItem(input.value);}}>
        Добавить
      </button>
      <p className={'list__notice'}>Элементы добавляются в конец списка</p>
      <ul className={'list__generated-list'}>
        {this.props.array ? this.props.array.map((item, index) => {
          if(item['label'] && item['value']) {
            return (
            <li key={index} className={'list__item'}>
              <b>label:</b> <span>{item['label']}</span> <b>value:</b> <span>{item['value']}</span>
              <i className={'list__change'}></i>
              <i className={'list__delete'} onClick={() => this.props.delArrayItem(item)}></i>
            </li>
            )} else if (typeof item !== 'object') return (
            <li key={index} className={'list__item'}>
              {item}
              <i className={'list__change'}></i>
              <i className={'list__delete'} onClick={() => this.props.delArrayItem(item)}></i>
            </li>
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

function mapDispatchToProps(dispatch) {
  return ({
    addArrayItem: (item) => {dispatch(actions.addArrayItem(item))},
    delArrayItem: (item) => {dispatch(actions.delArrayItem(item))},
    generateArray: () => {dispatch(actions.generateArray())}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(List);


