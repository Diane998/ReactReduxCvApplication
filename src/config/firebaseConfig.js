import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyDCBcmry_5rldN9g5SiewMDSEyDVVD-xzw',
  authDomain: 'cv-application-d1966.firebaseapp.com',
  databaseURL: 'https://cv-application-d1966.firebaseio.com',
  projectId: 'cv-application-d1966',
  storageBucket: 'cv-application-d1966.appspot.com',
  messagingSenderId: '665451045756',
  appId: '1:665451045756:web:be16509bdf92e6e01ffaf9',
  measurementId: 'G-TF2MJB7FBC'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
