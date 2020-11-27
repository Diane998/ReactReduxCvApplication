import history from '../history';

export const createCvApplication = formValues => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  firestore
    .collection('cvApplications')
    .add({
      ...formValues
    })
    .then(() => {
      dispatch({ type: 'CREATE_CV_APPLICATION', payload: formValues });
      history.push('/view');
    })
    .catch(err => dispatch({ type: 'CREATE_CV_APPLICATION_ERROR', err }));
};
