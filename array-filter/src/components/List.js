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
              <i className={'list__change'} onClick={(event) => toggleChangeForm(event)}></i>
              <i className={'list__delete'} onClick={() => this.props.delArrayItem(item)}></i>
              <div className={'list__change-form'} id={'change-form'}>
                <input className={'list__change-input'} type="text" placeholder={'label'}/>
                <input className={'list__change-input'} type="text" placeholder={'value'}/>
                <button className={'list__btn'} onClick={(event) => {
                  const el = event.target;
                  const inputs =  el.parentNode.querySelectorAll('input');
                  const label = inputs[0].value;
                  const value = inputs[1].value;
                  this.props.changeArrayItem(index, label, value);
                }}>
                  Ok
                </button>
              </div>
            </li>
            )} else if (typeof item !== 'object') return (
            <li key={index} className={'list__item'}>
              {item}
              <i className={'list__change'} onClick={(event) => toggleChangeForm(event)}></i>
              <i className={'list__delete'} onClick={() => this.props.delArrayItem(item)}></i>
              <div className={'list__change-form'} id={'change-form'}>
                <input className={'list__change-input'} type="text" placeholder={'label'}/>
                <input className={'list__change-input'} type="text" placeholder={'value'}/>
                <button className={'list__btn'}>Ok</button>
              </div>
            </li>
          )}) : ''}
      </ul>
    </div>
    );
  }
}

function toggleChangeForm(event) {
  const el = event.target;
  const changeForm =  el.parentNode.querySelectorAll('div #change-form')[0];
  changeForm.classList.toggle('active');
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
    changeArrayItem: (index, label, val) => {dispatch(actions.changeArrayItem(index, label, val))},
    generateArray: () => {dispatch(actions.generateArray())}
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(List);


