import { TaskDisplayer, TaskCreator, TaskManager } from "../Task";

export default function content() {
  const container = document.querySelector(".content");
  const sampleText = document.createElement("div");
  container.appendChild(sampleText);

  let listOfTasks = [];
  demoTasks(listOfTasks);
}

// Dummy samples to showcase cards + tasks
function demoTasks(listOfTasks) {
  const sampleTasks = [
    "Do Homework",
    "Wash car",
    "Go to Protest",
    "Read book",
    "Finish coding course",
    "Do laundry",
  ];
  sampleTasks.forEach((sampleTask) => {
    let task = TaskCreator(
      sampleTask,
      "sample description",
      "",
      undefined,
      listOfTasks
    );
    TaskManager.addThisTaskToArray(task, listOfTasks);
  });
  TaskDisplayer.displayAllTasks(listOfTasks);
}
