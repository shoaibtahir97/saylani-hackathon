import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {getFirestore, getDocs, getDoc, collection, addDoc, setDoc, doc, query, where} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'

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

const db = getFirestore(app);


function signInFirebase(userInfo) {
    let {email, password} = userInfo
    signInWithEmailAndPassword(auth, email, password)
    
    // const userId = auth.currentUser.uid;
    
    // addAdminToDB(userId, userInfo )
}

// async function addAdminToDB(userId, userInfo) {
//     const { email, name } = userInfo

//     return setDoc(doc(db, "admin", userId), { email, name })
// }


export{
    signInFirebase,
}

