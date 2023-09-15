import Task from "./task.js";
import Project from "./project.js";
import { populateStorage, retriveStorage, projectsList } from "./localStorage.js";
import { addTaskFormOpenClose, addProjectBtn, addTaskBtn, inboxController, showProjects } from "./displayController.js";

addTaskFormOpenClose(".addTask", ".closeBtn", ".taskForm");
addProjectBtn();
addTaskBtn();
retriveStorage();
inboxController();
if(localStorage.getItem("projects")){
    showProjects();
}