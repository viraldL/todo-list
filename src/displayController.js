import Project from "./project.js";
import Task from "./task.js";
import { populateStorage, retriveStorage, projectsList, deleteProjectLS, showStorage } from "./localStorage.js";

let current = 0;
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

const getNewDataTask = function() {
    const allTasks = document.querySelectorAll("[data-task]"); 
    return allTasks.length;
}

//add project to the list
const addProject = function(title) {
    const index = getNewData();
    const projList = document.querySelector(".customProjList");
    const addForm = document.querySelector("#projForm");

    const div = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const p = document.createElement("p");

    div.classList.add("customProj");
    div.setAttribute("data-project", `${index}`);
    p.textContent = title;

    const newProject = new Project(title);
    projectsList.push(newProject);
    // console.log(projectsList);
    // populateStorage(projectsList);
    // console.log(projectsList);
    // showStorage();

    deleteBtn.setAttribute("data-btn", `${index}`);
    deleteBtn.textContent = "X";

    div.appendChild(p);
    div.appendChild(deleteBtn);
    p.addEventListener("click", () => {
        changeProject(div.getAttribute('data-project'));
    })

    deleteBtn.addEventListener("click", () => {
        div.remove();
        let allDivs = document.querySelectorAll("[data-project]");
        projectsList.splice(index, 1);
        // console.log(projectsList);
        for(let i = 0; i < allDivs.length; i++){
            allDivs[i].setAttribute('data-project', i);
        }
    })
    projList.insertBefore(div, addForm);
    // console.log(projectsList);
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
    addButton.addEventListener("click", (e) => {
        e.preventDefault();
        // let index = getNewData();
        let inputField = document.querySelector(".projectName");
        addProject(inputField.value);
        closeForm();
    })

}


const addTask = function() {
    let currentProj = projectsList[current];
    let title = document.querySelector("#taskTitle").value;
    let desc = document.querySelector("#taskDesc").value;
    let date = document.querySelector("#taskDate").value;
    let prior = document.querySelector("#taskPrior").value;
    if(date === ""){
        date = "No date"
    }

    const newTask = new Task(title, desc, date, prior);
    const formBox = document.querySelector(".taskForm");
    currentProj.list.push(newTask);
    formBox.classList.remove("active");
    desc = "";
    date = "";
    prior = "";
    showTask(newTask)
}

const inboxController = function() {
    const inbox = document.querySelector("#inbox");
    inbox.addEventListener("click", () => {
        changeProject(0);
    })
}

const addTaskBtn = function() {
    const addBtn = document.querySelector("#addTask");
    addBtn.addEventListener("click", () => {
        addTask();
        document.querySelector("#taskTitle").value = "";
        document.querySelector("#taskDesc").value = "";
        document.querySelector("#taskDate").value = "";
        document.querySelector("#taskPrior").value = "0";
    })
}

const changeProject = function(id) {
    const projDisplay = document.querySelector("#projectName");
    const projName = projectsList[id].title;
    document.querySelector("section").innerHTML = "";
    projectsList[id].list.forEach(task => {
        showTask(task)
    })
    projDisplay.textContent = projName;
    console.log(projectsList);
    current = id;
}

const renderTask = function(task) {
    let index = getNewDataTask();
    const taskBox = document.createElement("div");
    taskBox.classList.add("task");
    taskBox.setAttribute("data-task", `${index}`);

    const completedInput = document.createElement("input");
    completedInput.setAttribute("type", "checkbox");
    completedInput.addEventListener("change", () => {
        task.completed = !task.completed;
        console.log(task);
    })

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    div2.classList.add("titlenpri");

    const title = document.createElement("span");
    title.classList.add("title");
    title.textContent = task.title;

    const prior = document.createElement("span");
    prior.classList.add("prior");
    const starImg0 = document.createElement("img");
    const starImg1 = document.createElement("img");
    const starImg2 = document.createElement("img");
    starImg0.src = "images/star-fill.svg";
    starImg1.src = "images/star-fill.svg";
    starImg2.src = "images/star-fill.svg";

    let i = 0;
    do {
        eval(`prior.appendChild(starImg${i});`);
        i++
    } while(task.priority >= i);

    const desc = document.createElement("span");
    desc.classList.add("desc");
    desc.textContent = task.desc;

    const date = document.createElement("span");
    date.classList.add("dueDate");
    date.textContent = task.dueDate;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        taskBox.remove();
        const allTasks = document.querySelectorAll("[data-task]");
        projectsList[current].list.splice(index, 1);
        for(let i = 0; i < allTasks.length; i++){
            allTasks[i].setAttribute('data-task', i);
        }
        console.log(projectsList);
    })

    div2.appendChild(title);
    div2.appendChild(prior);

    div1.appendChild(div2);
    div1.appendChild(desc);
    div1.appendChild(date);
    taskBox.appendChild(completedInput);
    taskBox.appendChild(div1);
    taskBox.appendChild(deleteBtn);
    
    return taskBox;
}

const showTask = function(task){
    const section = document.querySelector("section");
    section.appendChild(renderTask(task));
}


//DODAJ RETRIVEPROJECTS



export { addTaskFormOpenClose, addProjectBtn, addTaskBtn, inboxController };