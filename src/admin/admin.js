import {createClassInDB, registerStudentInDB, getClassesFromDb} from '../../config/firebase.js';

getClasses()




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