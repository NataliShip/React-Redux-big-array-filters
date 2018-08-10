import * as types from './actionTypes';

const initialState = {};

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case types.GENERATE_STARTED:
      return state;
    case types.GENERATE_FINISHED:
      return {
        ...state,
        generatedArray: action.generatedArray
      };
    case types.ADD_ARRAY_ITEM:
      return {
        ...state,
        generatedArray: [...state.generatedArray, action.item]
      };
    default:
      return state;
  }
}