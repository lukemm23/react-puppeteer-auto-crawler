const setFBDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_FB_DATA':
      return [...action.payload];
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default setFBDataReducer;
