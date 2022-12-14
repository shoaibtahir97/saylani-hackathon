import {signInFirebase} from './config/firebase.js'

window.signIn = async function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    try{
        await signInFirebase({email, password})
        alert("Admin Login successfully", location.replace("/src/admin/admin.html"))
    }   
    catch(e){
        let errorElem = document.getElementById("error");
        errorElem.innerHTML = e.message;
    } 
}

