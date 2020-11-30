const cvApplicationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_CV_APPLICATION':
      return { ...state, [action.payload.docId]: action.payload };
    case 'CREATE_CV_APPLICATION_ERROR':
      return state;
    default:
      return state;
  }
};

export default cvApplicationReducer;
