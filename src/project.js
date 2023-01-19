export default class Project {
    constructor(title) {
        this.title = title;
        this.list = [];
    }

    add(task) {
        this.list.push(task);
    }
}