import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyC4YcPq57vFlpZlAFvl-z4UsLXFXb2Dm2c",
    authDomain: "mini-hackathon-abf62.firebaseapp.com",
    projectId: "mini-hackathon-abf62",
    storageBucket: "mini-hackathon-abf62.appspot.com",
    messagingSenderId: "49534160690",
    appId: "1:49534160690:web:b9ca4ae4e9ccef53da512b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


function signInFirebase(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}


export{
    signInFirebase,
}

