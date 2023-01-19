export default class Task {
    constructor(title, desc, dueDate = "No date", priority, completed = false) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }

    set isCompleted(bool) {
        this.completed = bool;
    }
}