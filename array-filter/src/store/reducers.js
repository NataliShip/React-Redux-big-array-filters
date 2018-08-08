const initialState = {
  generatedArray: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GENERATE_STARTED":
      return state;
    case "GENERATE_FINISHED":
      return {
        ...state,
        generatedArray: action.generatedArray
      };
    default:
      return state;
  }
}