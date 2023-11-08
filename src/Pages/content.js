import { TaskDisplayer, TaskCreator, TaskManager } from "../Task";

export default function content() {
  const container = document.querySelector(".content");
  const sampleText = document.createElement("div");
  
  let listOfTasks = [];
  
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
      let task = TaskCreator(
        sampleTask,
        "sample description",
        new Date(),
        undefined,
        listOfTasks
      );
      TaskManager.addThisTaskToArray(task, listOfTasks);
    });
    TaskDisplayer.displayAllTasks(listOfTasks);
  }
  console.log(listOfTasks);
  demoTasks();

  container.appendChild(sampleText);
}
