import {createClassInDB, registerStudentInDB, getClassesFromDb} from '../../config/firebase.js';

getClasses()



window.registerStudent =  function() {
    const name = document.getElementById("name").value;
    const fatherName = document.getElementById("father-name").value;
    const rollNo = document.getElementById("roll-no").value;
    const phoneNo = document.getElementById("phone-no").value;
    const cnicNo = document.getElementById("cnic-no").value;
    const image = document.getElementById("image").files[0];
    const course = document.getElementById("student-course").value;
    const classses = document.getElementById("class").value;


    try{
        registerStudentInDB({name, fatherName, rollNo, phoneNo, cnicNo, course,classses})
        alert("Student Registered");
    }
    catch(e) {
        console.log(e.message)
    }
}

async function getClasses() {
    const createdClasses = await getClassesFromDb()
    
    for(let item  of createdClasses ) {
        const select = document.getElementById("classes");
        const option = document.createElement("option");
        
        option.innerHTML += `
            <option value="${item}">${item.classes}</option>
        `
        select.appendChild(option);

        
    }
}