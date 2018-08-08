import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const initialState = {};
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function reducer(state = initialState, action) {
  switch (action.type) {
    case "GENERATE_ARRAY":
      return {
        ...state,
        array: action.array
      };
    default:
      return state;
  }
}

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();
