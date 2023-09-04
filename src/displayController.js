import Project from "./project.js";
import { populateStorage, retriveStorage, projectsList, deleteProjectLS, showStorage } from "./localStorage.js";

const addTaskFormOpenClose = function(open, close, form) {
    const openBtn = document.querySelector(open);
    const closeBtn = document.querySelector(close);
    const formBox = document.querySelector(form);

    //open form for adding task
    openBtn.addEventListener("click", () => {
        formBox.classList.add("active");
    });
    //close form for adding task
    closeBtn.addEventListener("click", () => {
        formBox.classList.remove("active");
    });

}

//close project add form
const closeForm = function() {
    const addForm = document.querySelector(".customProjForm");
    addForm.classList.remove("active");

    let inputField = document.querySelector(".projectName");
    inputField.value = ""
}

//open project add form
const openForm = function() {
    const addForm = document.querySelector(".customProjForm");
    addForm.classList.add("active");
}

//get number of projects
const getNewData = function() {
    const allProj = document.querySelectorAll("[data-project]"); 
    return allProj.length;
}

//add project to the list
const addProject = function(title) {
    const index = getNewData();
    const projList = document.querySelector(".customProjList");
    const addForm = document.querySelector(".customProjForm");

    const div = document.createElement("div");
    const deleteBtn = document.createElement("button");

    div.classList.add("customProj");
    div.setAttribute("data-project", `${index}`);
    div.textContent = title;

    const newProject = new Project(title);
    projectsList.push(newProject);
    console.log(projectsList);
    // populateStorage(projectsList);
    // console.log(projectsList);
    // showStorage();

    deleteBtn.setAttribute("data-btn", `${index}`);
    deleteBtn.textContent = "X";

    div.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
        div.remove();
        let allDivs = document.querySelectorAll("[data-project]");
        for(let i = 0; i < allDivs.length; i++){
            allDivs[i].setAttribute('data-project', i);
        }
    })
    projList.insertBefore(div, addForm);
}


//control add project from buttons
const addProjectBtn = function() {
    const addBtn = document.querySelector(".customProjBtn");
    const closeFormBtn = document.querySelector("button.close")
    const addButton = document.querySelector("button.add");

    addBtn.addEventListener("click", () => {
        openForm();
    })

    closeFormBtn.addEventListener("click", () => {
        closeForm();
    })
    addButton.addEventListener("click", () => {
        // let index = getNewData();
        let inputField = document.querySelector(".projectName");
        addProject(inputField.value);
        closeForm();
    })

}


//DODAJ RETRIVEPROJECTS



export { addTaskFormOpenClose, addProjectBtn };