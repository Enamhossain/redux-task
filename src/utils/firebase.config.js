import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_pRBwkFmjoJ5NYcLKt8o84wmAtaQ6xZ4",
  authDomain: "simple-firebase-authenti-50db7.firebaseapp.com",
  projectId: "simple-firebase-authenti-50db7",
  storageBucket: "simple-firebase-authenti-50db7.appspot.com",
  messagingSenderId: "148209423570",
  appId: "1:148209423570:web:aacbc0bd11c9c0ea21490b",
  measurementId: "G-N9X90ZT8HL"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
