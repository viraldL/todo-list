import Project from "./project.js";
let current = 0;
let projectsList= [];
function populateStorage(projects) {
    if(projects.length >= 0) {
            localStorage.setItem(`projects`, JSON.stringify(projects));
    }
}

function deleteProjectLS(index) {
    let proj = JSON.parse(localStorage.getItem(`projects`));
    proj.splice(index, 1);
    projectsList = proj;
    // localStorage.setItem(`projects`, JSON.stringify(proj));
    populateStorage(projectsList);
}

function retriveStorage() {
    let proj = JSON.parse(localStorage.getItem(`projects`));
    if(proj !== null) {
        if(proj.length > 0) {
            for(let i = 0; i <= proj.length - 1;  i++) {
                    let projectName = proj[i].title;
                    let tasks = proj[i].list;
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
    // retriveStorage()

    const projList = document.querySelector(".customProjList");
    const addForm = document.querySelector(".customProjForm");
    let proj = JSON.parse(localStorage.getItem(`projects`));

    if(proj.length > 0) {
        for(let i = 0; i < proj.length; i++) {    
            
                const div = document.createElement("div");
                const deleteBtn = document.createElement("button");

                let projectName = proj[i].title;
                
                div.classList.add("customProj");
                div.setAttribute("data-project", `${i}`);
                div.textContent = projectName;
            
                deleteBtn.setAttribute("data-btn", `${i}`);
                deleteBtn.textContent = "X";
            
                div.appendChild(deleteBtn);
            
                deleteBtn.addEventListener("click", () => {
                    div.remove();
                    deleteProjectLS(i);
                })
                projList.insertBefore(div, addForm);

        }
    }
}


export { populateStorage, retriveStorage, projectsList, showStorage, deleteProjectLS, current };