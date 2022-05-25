import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2SC6GJwiC03x5_pCsu0EuXssjoDxGA88",
    authDomain: "react-firebase2-fab20.firebaseapp.com",
    projectId: "react-firebase2-fab20",
    storageBucket: "react-firebase2-fab20.appspot.com",
    messagingSenderId: "958000580852",
    appId: "1:958000580852:web:62b196ba6e11245d17b6a1",
    measurementId: "G-HBT62MH4R8"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;