import history from '../history';
import { reset } from 'redux-form';
import { getFirestore } from 'redux-firestore';

export const signInWithGoogle = credentials => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  firebase
    .login({
      provider: 'google',
      type: 'popup'
    })
    .then(({ credential: { signInMethod }, profile: { uid } }) => {
      dispatch({
        type: 'SIGN_IN_WITH_GOOGLE',
        payload: { signInMethod, uid }
      });
    });
};

export const signOutWithGoogle = credentials => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  firebase.logout().then(() => {
    dispatch({ type: 'SIGN_OUT_WITH_GOOGLE' });
  });
};

export const signIn = credentials => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();

  credentials
    ? firebase
        .login({
          email: credentials.email,
          password: credentials.password
        })
        .then(() => {
          dispatch({ type: 'SIGN_IN' });
        })
    : firebase
        .login({
          provider: 'google',
          type: 'popup'
        })
        .then(() => {
          dispatch({ type: 'SIGN_IN' });
        });

  // firebase
  //   .login({
  //     provider: 'google',
  //     type: 'popup'
  //   })
  //   .then(() => {
  //     dispatch({ type: 'SIGN_IN' });
  //   });
};

export const signOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();

  firebase.logout().then(() => {
    dispatch({ type: 'SIGN_OUT' });
  });
};

export const signUp = user => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const firestore = getFirestore();

  firebase
    .createUser({
      email: user.email,
      password: user.password,
      username: user.username
    })
    .then(res => {
      firestore
        .collection('users')
        .doc(res.user.uid)
        .set({ email: user.email });
    })
    .then(() => {
      dispatch({ type: 'SIGN_UP' });
      history.push('/create');
    });
};

export const createCvApplication = formValues => async (
  dispatch,
  getState,
  { getFirestore }
) => {
  const firestore = getFirestore();
  firestore
    .collection('cvApplications')
    .add({
      ...formValues
    })
    .then(docRef => {
      dispatch(reset('cv-form'), {
        type: 'CREATE_CV_APPLICATION',
        payload: { ...formValues, docId: docRef.id }
      });
      history.push(`/view/${docRef.id}`);
    })
    .catch(err => dispatch({ type: 'CREATE_CV_APPLICATION_ERROR', err }));
};
