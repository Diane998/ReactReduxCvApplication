import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import { firestoreReducer } from 'redux-firestore';
import cvApplicationReducer from './cvApplicationReducer';

export default combineReducers({
  form: reducer,
  firestore: firestoreReducer,
  cvApplication: cvApplicationReducer
});
