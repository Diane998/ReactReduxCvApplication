import history from '../history';

export let id;

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
      dispatch({
        type: 'CREATE_CV_APPLICATION',
        payload: { ...formValues, docId: docRef.id }
      });
      id = docRef.id;
      history.push(`/view/${docRef.id}`);
    })
    .catch(err => dispatch({ type: 'CREATE_CV_APPLICATION_ERROR', err }));
};
