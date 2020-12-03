const INITIAL_STATE = { authError: null };

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN_WITH_GOOGLE':
      return { ...state };
    case 'SIGN_IN_WITH_GOOGLE_ERROR':
      return { ...state, authError: action.payload };
    case 'SIGN_OUT_WITH_GOOGLE':
      return { ...state };
    case 'SIGN_IN':
      return { ...state };
    case 'SIGN_IN_ERROR':
      return { ...state, authError: action.payload };
    case 'SIGN_OUT':
      return { ...state };
    case 'SIGN_UP':
      return { ...state };
    case 'SIGN_UP_ERROR':
      return { ...state, authError: action.payload };
    default:
      return state;
  }
};

export default authReducer;
