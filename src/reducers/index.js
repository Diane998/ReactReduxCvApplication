import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import cvApplicationReducer from './cvApplicationReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  firestore: firestoreReducer,
  cvApplication: cvApplicationReducer,
  firebase: firebaseReducer
});
