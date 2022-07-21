// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoj74Q3407cvG52HZsdGf4gCXAKYfJads",
  authDomain: "next-author.firebaseapp.com",
  projectId: "next-author",
  storageBucket: "next-author.appspot.com",
  messagingSenderId: "698335100286",
  appId: "1:698335100286:web:07f832aab9e63b5eb4472f",
  measurementId: "G-C9B3QN8Q6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()