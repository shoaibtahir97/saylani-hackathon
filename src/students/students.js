import {registerStudentInDB, getRegisteredStudents} from '../../config/firebase.js'

showRegisteredStudents()

window.registerStudent =  function() {
    const name = document.getElementById("name").value;
    const fatherName = document.getElementById("father-name").value;
    const rollNo = document.getElementById("roll-no").value;
    const phoneNo = document.getElementById("phone-no").value;
    const cnicNo = document.getElementById("cnic-no").value;
    const image = document.getElementById("image").files[0];
    const course = document.getElementById("student-course").value;
    const classes = document.getElementById("class").value;


    try{
        registerStudentInDB({name, fatherName, rollNo, phoneNo, cnicNo, course,classes})
        alert("Student Registered");
    }
    catch(e) {
        console.log(e.message)
    }
}


async function showRegisteredStudents() {
    const students = await getRegisteredStudents()
    console.log(students)
    for(let item of students) {
        const div = document.getElementById("show-students");
        let ddiv = document.createElement("div");

        ddiv.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <p class="card-text"><b>Course Name: </b>${item.name}</p>
                <p class="card-text"><b>Batch: </b>${item.fatherName}</p>
                <p class="card-text"><b>Section: </b>${item.rollNo}</p>
                <p class="card-text"><b>Classes: </b>${item.phoneNo}</p>
                <p class="card-text"><b>Timings: </b>${item.cnicNo}</p>
                <p class="card-text"><b>Teacher Name: </b>${item.course}</p>
                <p class="card-text"><b>Teacher Name: </b>${item.classes}</p>
            </div>
            <div class="card-footer ">
                <a href="#" class="btn btn-primary">Edit Class</a>
            </div>
        </div>
        `;
        div.appendChild(ddiv);
    }
}