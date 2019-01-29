import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCNI-_hrt8Fn30fXbnXkrDsgEDdWjIW1hA",
  authDomain: "revents-229919.firebaseapp.com",
  databaseURL: "https://revents-229919.firebaseio.com",
  projectId: "revents-229919",
  storageBucket: "revents-229919.appspot.com",
  messagingSenderId: "705750469943"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;