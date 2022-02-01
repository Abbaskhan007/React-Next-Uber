
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCileqKaTW9-3MfHnrxYtThYqrJDbXmy40",
  authDomain: "uber-clone-a496a.firebaseapp.com",
  projectId: "uber-clone-a496a",
  storageBucket: "uber-clone-a496a.appspot.com",
  messagingSenderId: "440084335783",
  appId: "1:440084335783:web:d057f122339a8c51cf9f82",
  measurementId: "G-Q1G72LR01P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth  = getAuth();

export {app,provider,auth};