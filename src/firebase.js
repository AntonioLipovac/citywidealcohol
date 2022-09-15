import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD4NW0dESGt9KWYpowoCMs0cxod9lGrj2A",
    authDomain: "citywide-alcohol-b04e2.firebaseapp.com",
    projectId: "citywide-alcohol-b04e2",
    storageBucket: "citywide-alcohol-b04e2.appspot.com",
    messagingSenderId: "324916828576",
    appId: "1:324916828576:web:9b9c66cc596ffaf9032cc5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export  {
    firebase,
};