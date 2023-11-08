import { TaskDisplayer, TaskCreator, TaskManager } from "./Task";
import header from "./Pages/header";
import sidebar from "./Pages/sidebar";
import content from "./Pages/content";
import "./style.css";
import { Card } from "./Card";

let listOfTasks = [];

header();
sidebar();
content();

// Dummy samples to showcase cards + tasks
function demoTasks() {
  const sampleTasks = [
    "Do Homework",
    "Wash car",
    "Go to Protest",
    "Read book",
    "Finish coding course",
    "Do laundry",
  ];
  sampleTasks.forEach((sampleTask) => {
    let task = TaskCreator(sampleTask, undefined, "Urgent");
    TaskManager.addThisTaskToArray(task, listOfTasks);
  });
  TaskDisplayer.displayAllTasks(listOfTasks);``
}
console.log(listOfTasks);
demoTasks();
