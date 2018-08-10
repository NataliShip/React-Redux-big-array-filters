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
    case types.DELETE_ARRAY_ITEM:
      return {
        ...state,
        generatedArray: state.generatedArray.filter(item => item !== action.el)
      };
    case types.CHANGE_ARRAY_ITEM:
      const newArr = state.generatedArray;
      newArr[action.index].label = action.label;
      state.generatedArray[action.index].value = action.value;
      return {
        ...state,
        change: [
          state.generatedArray[action.index].label = action.label,
          state.generatedArray[action.index].value = action.value
        ],
        generatedArray: [...state.generatedArray]
      };
    default:
      return state;
  }
}