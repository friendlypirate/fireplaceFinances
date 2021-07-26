import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const  firebaseConfig = {
    apiKey: "AIzaSyAvojIe6mDXQhGzjXCsIxh0h1K6CXErwxQ",
    authDomain: "fireplace-finance.firebaseapp.com",
    projectId: "fireplace-finance",
    storageBucket: "fireplace-finance.appspot.com",
    messagingSenderId: "801040617115",
    appId: "1:801040617115:web:e4b995f0c524c101a3403e"
  };
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;