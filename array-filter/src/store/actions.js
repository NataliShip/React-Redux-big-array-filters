import * as types from './actionTypes';

export const generateArray = () => {
  return (dispatch) => {
      dispatch(generateStarted());
      const arr = [1, 2, 3];
      dispatch(generateFinished(arr));
  }
}

const generateStarted = () => {
  return { type: types.GENERATE_STARTED }
};

const generateFinished = (newArray) => {
  return { type: types.GENERATE_FINISHED, generatedArray: newArray }
};