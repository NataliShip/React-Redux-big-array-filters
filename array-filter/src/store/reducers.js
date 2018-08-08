const initialState = {
  generatedArray: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GENERATE_ARRAY":
      return {
        ...state,
        generatedArray: action.generatedArray
      };
    default:
      return state;
  }
}