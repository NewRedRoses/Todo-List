import { Card } from "./Card";
class Task {
  constructor(title, description, dueDate, priority, parentArray) {
    this.title = title;
    this.description = description;
    if (dueDate == "") {
      this.dueDate = new Date();
    } else {
      this.dueDate = new Date(dueDate);
    }
    this.priority = priority;
    this.parentArray = parentArray;
  }
}

function TaskCreator(title, description, dueDate, priority, parentArray) {
  return new Task(title, description, dueDate, priority, parentArray);
}

const TaskManager = (() => {
  const addThisTaskToArray = (task, array) => array.push(task);
  const removeThisTaskFromArray = (task, array) => {
    const index = array.indexOf(task);
    if (index !== -1) {
      console.log("Task found in this array..removing");
      array.splice(index, 1);
    } else {
      console.log("Task not in this array");
    }
  };
  return { addThisTaskToArray, removeThisTaskFromArray };
})();

const TaskDisplayer = (() => {
  const displayTask = (task) => {
    new Card(task);
  };
  const displayAllTasks = (listOfTasks) => {
    console.log(listOfTasks);
    listOfTasks.forEach((task) => {
      new Card(task);
    });
  };
  return { displayTask, displayAllTasks };
})();



export { TaskManager, TaskCreator, TaskDisplayer };
