import { getClassesFromDb, createClassInDB } from '../../config/firebase.js'

getClasses()

window.createClass = async function () {
    const timing = document.getElementById("timing").value;
    const classes = document.getElementById("class").value;
    const teacher = document.getElementById("teacher").value;
    const section = document.getElementById("section").value;
    const course = document.getElementById("course").value;
    const batch = document.getElementById("batch").value;

    try {
        await createClassInDB({ timing, classes, teacher, section, course, batch })
        alert("Class Created Successfully", window.location.reload());
    }
    catch (e) {
        console.log(e.message);
    }
}

async function getClasses() {
    const createdClasses = await getClassesFromDb()

    for (let item of createdClasses) {
        const div = document.getElementById("show-classes");
        let ddiv = document.createElement("div");

        ddiv.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <p class="card-text"><b>Course Name: </b>${item.course}</p>
                <p class="card-text"><b>Batch: </b>${item.batch}</p>
                <p class="card-text"><b>Section: </b>${item.section}</p>
                <p class="card-text"><b>Classes: </b>${item.classes}</p>
                <p class="card-text"><b>Timings: </b>${item.timing}</p>
                <p class="card-text"><b>Teacher Name: </b>${item.teacher}</p>
            </div>
            <div class="card-footer ">
                <a href="#" class="btn btn-primary">Edit Class</a>
            </div>
        </div>
        `;
        div.appendChild(ddiv);
    }
}