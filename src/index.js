import Task from "./task.js";
import Project from "./project.js";
import { populateStorage, retriveStorage, projectsList } from "./localStorage.js";
import { addTaskFormOpenClose, addProjectBtn, addTaskBtn, inboxController, showProjects } from "./displayController.js";

// showStorage();
// localStorage.clear();
// projectsList = [];

// let task1 = new Task("Zjesc", "musze zjesc jutro rano", "2022-10-13", 3);
// let task2 = new Task("Zjesc", "musze zjesc jutro rano", "2022-10-13", 3);
// let task3 = new Task("Zjesc", "musze zjesc jutro rano", "2022-10-13", 3);
// let task4 = new Task("Zjesc", "musze zjesc jutro rano", "2022-10-13", 3);
// let task5 = new Task("Zjesc", "musze zjesc jutro rano", "2022-10-13", 3);
// if(!localStorage.getItem(`projects`)) {
//     let Inbox = new Project("Inbox");
//     projectsList.push(Inbox);
//     populateStorage(projectsList);
// }
// let Focus = new Project("focus");
// Inbox.add(task1);
// Inbox.add(task2);
// Inbox.add(task3);
// Focus.add(task4);
// Focus.add(task5);
// // let Empty = new Project("empty");
// projectsList.push(Focus);
console.log(projectsList);
// populateStorage(projectsList);
// console.log(Inbox);
// console.log(projectsList);
addTaskFormOpenClose(".addTask", ".closeBtn", ".taskForm");
addProjectBtn();
addTaskBtn();
retriveStorage();
inboxController();
if(localStorage.getItem("projects")){
    showProjects();
}
// populateStorage(projectsList);
// retriveStorage();