import {signInFirebase} from './config/firebase.js'

window.signIn = async function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    try{
        signInFirebase(email, password)
        alert("Admin Login successfully")
    }   
    catch(e){
        let errorElem = document.getElementById("error");
        errorElem.innerHTML = e.message;
    } 


}