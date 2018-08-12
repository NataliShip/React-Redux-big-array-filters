import * as types from './actionTypes';

const initialState = {
  randomArrays: []
};

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
      return {
        ...state,
        change: [
          state.generatedArray[action.index].label = action.label,
          state.generatedArray[action.index].value = action.value
        ],
        generatedArray: [...state.generatedArray]
      };
    case types.GENERATE_ARRAY_WITH_FIELDS_STARTED:
      return {
        ...state
      };
    case types.GENERATE_ARRAY_WITH_FIELDS_FINISHED:
      return {
        ...state,
        randomArrays: [
          ...state.randomArrays, action.array
        ]
      };
    default:
      return state;
  }
}