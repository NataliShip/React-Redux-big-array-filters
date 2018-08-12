import React, { Component } from 'react';
import './Filter.css';
import {connect} from "react-redux";

export default class Filter extends Component {

  render() {
    return (
      <div className={'filter'}>
        <h1 className={'filter__header'}>Вторая часть задания: Реализовать функцию filter</h1>
        <div className={'filter__generate'}>
          <p>Введите необходимое число массивов для генерации. Массивы выведутся в консоль (F12->Console)</p>
          <input id={'array-count'} type="text" placeholder={0}/>
          <button className={'filter__btn'}>Сгенерировать</button>
        </div>
        <div className={'filter__params'}>
          <p className={'filter__notice'}>*Лучше посмотреть значение для фильтрации в сгенерированных массивах, потому что они генерируются случайно.
            В случае если поле не указано поиск идет и по ключам и по значениям объектов, если поле указано то только по значениям</p>
          <div>
            <input type="text" placeholder={'Строка'}/>
            <p>Строка по которой идет фильтрация</p>
          </div>
          <div>
            <input type="text" placeholder={'Поле объекта'}/>
            <p>Поле по которому идет фильтрация (может отсутствовать)</p>
          </div>
          <button className={'filter__btn'}>Отфильтровать</button>
          <p className={'filter__notice'}>Результаты работы фильтра так же выведутся в консоль</p>
        </div>
      </div>
    )}
}
