import history from '../history';
import { reset } from 'redux-form';

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
