const setCLDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CL_DATA':
      return [...action.payload];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default setCLDataReducer;
