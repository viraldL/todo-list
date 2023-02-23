import Project from "./project.js";

let projectsList= [];
function populateStorage(projects) {
    if(projects.length > 0) {
        for(let i = 0; i <= projects.length - 1; i++){
            localStorage.setItem(`project${i}`, projects[i].title);
            localStorage.setItem(`project${i}Tasks`, JSON.stringify(projects[i].list));
        }
    }
}

function deleteProjectLS(index) {
    localStorage.removeItem(`project${index}`);
    localStorage.removeItem(`project${index}Tasks`);
    console.log("ls");
}

function retriveStorage() {
    let storageLength = localStorage.length;
    if(storageLength > 0) {
        for(let i = 0; i <= storageLength / 2;  i++) {
            if(localStorage.getItem(`project${i}`)) {
                let projectName = localStorage.getItem(`project${i}`);
                let tasks = JSON.parse(localStorage.getItem(`project${i}Tasks`));
                let project = new Project(projectName);
                if(tasks.length > 0){
                    tasks.forEach(task => {
                        project.add(task);
                    });
                }
                projectsList.push(project);
            }
        }
    }
}

function showStorage() {
    retriveStorage()

    const projList = document.querySelector(".customProjList");
    const addForm = document.querySelector(".customProjForm");

    for(let i = 0; i < projectsList.length; i++) {    
        if(localStorage.getItem(`project${i}`) === null){
            console.log("null");
            continue;
        } else {
            const div = document.createElement("div");
            const deleteBtn = document.createElement("button");

            let projectName = localStorage.getItem(`project${i}`);
            
            div.classList.add("customProj");
            div.setAttribute("data-project", `${i}`);
            div.textContent = projectName;
        
            const newProject = new Project(projectName);
            console.log(projectsList);
        
            deleteBtn.setAttribute("data-btn", `${i}`);
            deleteBtn.textContent = "X";
        
            div.appendChild(deleteBtn);
        
            deleteBtn.addEventListener("click", () => {
                div.remove();
                deleteProjectLS(i);
                projectsList.splice(i, 1);
            })
            projList.insertBefore(div, addForm);
    }
    }
}


export { populateStorage, retriveStorage, projectsList, showStorage, deleteProjectLS };