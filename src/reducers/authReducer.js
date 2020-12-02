const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN_WITH_GOOGLE':
      return { ...state };
    case 'SIGN_OUT_WITH_GOOGLE':
      return { ...state };
    case 'SIGN_IN':
      return { ...state };
    case 'SIGN_OUT':
      return { ...state };
    case 'SIGN_UP':
      return { ...state };
    default:
      return state;
  }
};

export default authReducer;
