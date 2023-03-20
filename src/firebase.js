// Import the functions you need from the SDKs you need
import firebase from './firebase';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBNIQkOv2AQy807cG-wl1io-XhnYrK1WHk',
  authDomain: 'linkedin-clone-rahul4dev.firebaseapp.com',
  projectId: 'linkedin-clone-rahul4dev',
  storageBucket: 'linkedin-clone-rahul4dev.appspot.com',
  messagingSenderId: '1015365531779',
  appId: '1:1015365531779:web:0511ae2c02e463fa6183b6',
  measurementId: 'G-ZL9X0177FD',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
