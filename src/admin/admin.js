import {createClassInDB} from '../../config/firebase.js';

window.createClass = async function() {
    const timing = document.getElementById("timing").value;
    const classes = document.getElementById("class").value;
    const teacher = document.getElementById("teacher").value;
    const section = document.getElementById("section").value;
    const course = document.getElementById("course").value;
    const batch = document.getElementById("batch").value;

    try{
        await createClassInDB({timing, classes, teacher, section, course, batch})
        alert("Class Created Successfully");
    }
    catch(e) {
        console.log(e.message);
    }   
}

window.registerStudent = async function() {
    const name = document.getElementById("name").value;
    const fatherName = document.getElementById("father-name").value; 
}