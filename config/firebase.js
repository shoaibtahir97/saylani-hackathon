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


async function signInFirebase(userInfo) {
    let {email, password} = userInfo
    await signInWithEmailAndPassword(auth, email, password)
    
    // const userId = auth.currentUser.uid;
    
    // addAdminToDB(userId, userInfo )
}

function createClassInDB(userInfo) {
    let {timing, classes, teacher, section, course, batch} = userInfo;
    return addDoc(collection(db, "classes"), {
        timing,
        classes,
        teacher,
        section,
        course,
        batch
    })
}

function registerStudentInDB(studentInfo) {
    let {name, fatherName, rollNo, phoneNo, cnicNo, course,classes} = studentInfo;
    return addDoc(collection(db, "students"),{
        name, fatherName, rollNo, phoneNo, cnicNo, course,classes
    })
}

async function getClassesFromDb() {
    const querySnapshot = await getDocs(collection(db, "classes")) //DB se data le rhe hain aur variable me save horha hai
    const classes = []; //empty array create ki hai kis me data from DB push hoga
    querySnapshot.forEach((doc) => { // variable pe for loop laga hai jis me doc 
        classes.push({ id: doc.id, ...doc.data() }) //
    });
    return classes;
}

async function getRegisteredStudents() {
    const querySnapshot = await getDoc(collection(db, "students"))
    const students = [];
    querySnapshot.forEach((doc) => {
        students.push({id: doc.id, ...doc.data()})
    });
    return students;
}

// async function addAdminToDB(userId, userInfo) {
//     const { email, name } = userInfo

//     return setDoc(doc(db, "admin", userId), { email, name })
// }


export{
    signInFirebase,
    createClassInDB,
    registerStudentInDB,
    getClassesFromDb,
    getRegisteredStudents
}

