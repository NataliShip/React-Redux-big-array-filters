import * as types from './actionTypes';

export const generateArray = () => {
  return (dispatch) => {
      dispatch(generateStarted());
      function generateArr(number) {
        let array = [];
        for (let i = 0; i < number; i++ ){
          function makeLabel() {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (let i = 0; i < 5; i++) {
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

export const addArrayItem = (item) => {
  return { type: types.ADD_ARRAY_ITEM, item: item }
};

export const delArrayItem = (element) => {
  return { type: types.DELETE_ARRAY_ITEM, el: element }
};

export const changeArrayItem = (index, label, val) => {
  return { type: types.CHANGE_ARRAY_ITEM, label: label, value: val, index:index }
};

export const generateArrayWithFields = () => {
  return (dispatch) => {
    dispatch(generateArrayWithFieldsStarted());
    function generateArrayWithRandomFields(number) {
      var array = [];
      for (var i = 0; i < number; i++ ){
        function makeLabel() {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

          for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          return text;
        }
        var fieldsNames = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'eiusmod', 'tempor', 'incididunt', 'labore', 'magna', 'aliqua', 'enim' ];
        var element = {};
        for (var j = 0; j <= (Math.floor(Math.random() * 10)); j++) {
          element[`${fieldsNames[(Math.floor(Math.random() * 15))]}`] = makeLabel();
        }
        array.push(element);
      }
      return array;
    }

    const arrWithFields = generateArrayWithRandomFields(10000);
    console.log(arrWithFields);
    dispatch(generateArrayWithFieldsFinished(arrWithFields));
  }
}

const generateArrayWithFieldsStarted = () => {
  return { type: types.GENERATE_ARRAY_WITH_FIELDS_STARTED }
};

const generateArrayWithFieldsFinished = (newArray) => {
  return { type: types.GENERATE_ARRAY_WITH_FIELDS_FINISHED, array: newArray }
};
