const INITIAL_STATE = { createCvError: null };

const cvApplicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_CV_APPLICATION':
      return { ...state };
    case 'CREATE_CV_APPLICATION_ERROR':
      return { ...state, createCvError: action.payload };
    default:
      return state;
  }
};

export default cvApplicationReducer;
