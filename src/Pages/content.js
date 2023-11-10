import { TaskDisplayer } from "../Task";
import { listOfTasks } from "..";
import { removeAllCards } from "../Card";

export default function content(sectionToRender) {
  const container = document.querySelector(".content");
  const sampleText = document.createElement("div");
  container.appendChild(sampleText);
  console.log("Section to render: ", sectionToRender);
  // To be removed
  // demoTasks();
  console.log(listOfTasks);
  const date = new Date();
  const today = date.getDate();
  const tomorrow = today + 1; // expect for days when end of month

  switch (sectionToRender) {
    case "all":
      TaskDisplayer.displayAllTasks(listOfTasks);
      break;
    case "today":
      // In theory would need to be more robust than just today's digit
      // It would need to have the same day, month and year.
      console.log("testing the today, with value: ", today);
      const listOfTodayTasks = listOfTasks.filter((task) => {
        return task.dueDate.getDate() == today;
      });
      console.log(listOfTodayTasks);
      TaskDisplayer.displayAllTasks(listOfTodayTasks);
      break;
    case "tomorrow":
      console.log("testing the today, with value: ", tomorrow);
      const listOfTomorrowTasks = listOfTasks.filter((task) => {
        return task.dueDate.getDate() == tomorrow;
      });
      console.log(listOfTomorrowTasks);
      TaskDisplayer.displayAllTasks(listOfTomorrowTasks);
      break;
  }
}
