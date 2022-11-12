import { getClassesFromDb } from '../../config/firebase.js'

getClasses()

async function getClasses() {
    const createdClasses = await getClassesFromDb()

    for (let item of createdClasses) {
        const div = document.getElementById("show-classes");
        let ddiv = document.createElement("div");

        ddiv.innerHTML = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Batch: ${item.batch}</h5>
                <h5 class="card-title">Classes: ${item.classes}</h5>
                <h5 class="card-title">Course: ${item.course}</h5>
                <h5 class="card-title">Section: ${item.section}</h5>
                <h5 class="card-title"> Batch: ${item.batch}</h5>
                <h5 class="card-title">Timing: ${item.timing}</h5>
                <a href="#" class="btn btn-primary">Edit </a>
            </div>
        </div>
        `;
        div.appendChild(ddiv);
   }
}