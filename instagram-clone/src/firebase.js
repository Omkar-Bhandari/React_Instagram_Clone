// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAGM0nQX8LDm-VcXIQR52UF2pOBMQmq4dU",
    authDomain: "react-instagram-clone-f52ea.firebaseapp.com",
    databaseURL: "https://react-instagram-clone-f52ea-default-rtdb.firebaseio.com",
    projectId: "react-instagram-clone-f52ea",
    storageBucket: "react-instagram-clone-f52ea.appspot.com",
    messagingSenderId: "1006058992088",
    appId: "1:1006058992088:web:d22de2ff65d6c162d3c2ad",
    measurementId: "G-C41Z354PD9"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage};