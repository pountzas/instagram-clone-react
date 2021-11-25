import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import seedDatabase from '../seed';

const config = {
  apiKey: 'AIzaSyDNNUdWxKxDxIQEjXBkzoHhs4sdCHJBP5Y',
  authDomain: 'insta-ba113.firebaseapp.com',
  projectId: 'insta-ba113',
  storageBucket: 'insta-ba113.appspot.com',
  messagingSenderId: '814217784026',
  appId: '1:814217784026:web:96789ede392192dd0dd3e3',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };
