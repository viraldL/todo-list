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


export { populateStorage, retriveStorage, projectsList };