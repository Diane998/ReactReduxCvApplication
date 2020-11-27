const cvApplicationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_CV_APPLICATION':
      console.log('received project', action);
      return action.payload;
    case 'CREATE_CV_APPLICATION_ERROR':
      console.log('create cv application error', action.err);
      return state;
    default:
      return state;
  }
};

export default cvApplicationReducer;
