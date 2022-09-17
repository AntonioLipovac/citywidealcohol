import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4NW0dESGt9KWYpowoCMs0cxod9lGrj2A",
    authDomain: "citywide-alcohol-b04e2.firebaseapp.com",
    projectId: "citywide-alcohol-b04e2",
    storageBucket: "citywide-alcohol-b04e2.appspot.com",
    messagingSenderId: "324916828576",
    appId: "1:324916828576:web:9b9c66cc596ffaf9032cc5"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword}