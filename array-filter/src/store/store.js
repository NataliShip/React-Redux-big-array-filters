import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import * as reducers from "./reducers";

export default (initialState = {}) => {

  const store = createStore(
    combineReducers(reducers),
    compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
  );

  return store;
};