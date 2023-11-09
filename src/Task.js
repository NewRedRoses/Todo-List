import { Card } from "./Card";
import { format } from "date-fns";
const { zonedTimeToUtc, utcToZonedTime } = require("date-fns-tz");

const dateFormat = "MM/dd/yyyy";
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

class Task {
  constructor(title, description, dueDateString, priority, parentArray) {
    this.title = title;
    this.description = description;
    if (dueDateString == "") {
      let currentDate = new Date();
      currentDate = utcToZonedTime(currentDate, timeZone);
      this.dueDate = format(currentDate, dateFormat);
    } else {
      let passedDate = zonedTimeToUtc(dueDateString, timeZone);
      passedDate = utcToZonedTime(passedDate, timeZone);
      this.dueDate = format(passedDate, dateFormat);
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
