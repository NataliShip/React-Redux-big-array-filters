import * as types from './actionTypes';

export const generateArray = () => {
  return (dispatch) => {
      dispatch(generateStarted());
      function generateArr(number) {
        var array = [];
        for (var i = 0; i < number; i++ ){
          function makeLabel() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 5; i++) {
              text += possible.charAt(Math.floor(Math.random() * possible.length));
            } return text;
          }
          array.push({label:makeLabel(), value: Math.floor(Math.random() * number)});
        } return array;
      }
      const arr = generateArr(10000);
      dispatch(generateFinished(arr));
  }
}

const generateStarted = () => {
  return { type: types.GENERATE_STARTED }
};

const generateFinished = (newArray) => {
  return { type: types.GENERATE_FINISHED, generatedArray: newArray }
};