import history from '../history';
import { reset } from 'redux-form';
import { getFirestore } from 'redux-firestore';

export const signInWithGoogle = () => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  try {
    await firebase.login({
      provider: 'google',
      type: 'popup'
    });
    dispatch({ type: 'SIGN_IN_WITH_GOOGLE' });
    history.push('/create');
  } catch (err) {
    dispatch({ type: 'SIGN_IN_WITH_GOOGLE_ERROR', payload: err });
  }
};

export const signOutWithGoogle = () => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  await firebase.logout();
  dispatch({ type: 'SIGN_OUT_WITH_GOOGLE' });
  history.push('/create');
};

export const signIn = ({ email, password }) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  try {
    await firebase.login({
      email,
      password
    });
    dispatch(reset('signIn'), { type: 'SIGN_IN' });
    history.push('/create');
  } catch (err) {
    dispatch({ type: 'SIGN_IN_ERROR', payload: err });
  }
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  await firebase.auth().signOut();
  dispatch({ type: 'SIGN_OUT' });
  history.push('/create');
};

export const signUp = ({ email, password, username }) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  try {
    const createUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await firestore
      .collection('users')
      .doc(createUser.user.uid)
      .set({ email, username });

    dispatch(reset('signUp'), { type: 'SIGN_UP' });
    history.push('/create');
  } catch (err) {
    dispatch({ type: 'SIGN_UP_ERROR', payload: err });
  }
};

export const createCvApplication = formValues => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  const uid = getState().firebase.auth.uid;

  try {
    await firestore
      .collection('cvApplications')
      .doc(uid)
      .set({
        ...formValues
      });

    await dispatch(reset('cv-form'), {
      type: 'CREATE_CV_APPLICATION'
    });
    history.push(`/view/${uid}`);
  } catch (err) {
    dispatch({ type: 'CREATE_CV_APPLICATION_ERROR', payload: err });
  }
};
