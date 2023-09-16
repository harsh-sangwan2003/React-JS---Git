// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8mg_vSWjCDOqLdU9HlFmsEs5FusXuC68",
    authDomain: "fir-demo-238b4.firebaseapp.com",
    databaseURL: "https://fir-demo-238b4-default-rtdb.firebaseio.com",
    projectId: "fir-demo-238b4",
    storageBucket: "fir-demo-238b4.appspot.com",
    messagingSenderId: "1053929605793",
    appId: "1:1053929605793:web:545e7d6cc8baa8b99ffee0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users: firestore.collection('users')
}

export const storage = firebase.storage();