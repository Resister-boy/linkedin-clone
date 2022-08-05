import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbK4mqzeQFRq-oDoDUSldwvpYzCLHkbDU",
  authDomain: "linkedin-clone-1f462.firebaseapp.com",
  projectId: "linkedin-clone-1f462",
  storageBucket: "linkedin-clone-1f462.appspot.com",
  messagingSenderId: "481590111566",
  appId: "1:481590111566:web:7cd3d7ba2966919fad421f",
  measurementId: "G-3EKQLBJ8HB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();

export {
  db,
  auth,
  timeStamp
}