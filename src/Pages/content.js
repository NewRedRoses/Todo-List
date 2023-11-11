import { TaskDisplayer } from "../Task";
import { listOfTasks } from "..";

export default function content(sectionToRender) {
  const container = document.querySelector(".content");
  const sampleText = document.createElement("div");
  container.appendChild(sampleText);

  switch (sectionToRender) {
    case "all":
      TaskDisplayer.displayAllTasks(listOfTasks);
      break;
    case "today":
      // In theory would need to be more robust than just today's digit
      // It would need to have the same day, month and year.
      // Handle today
      let currentDate = new Date();
      const today = currentDate.getDate();
      filterByDate(today);
      break;
    case "tomorrow":
      // Handle tomorrow (works for end of month)
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow = tomorrow.getDate();
      filterByDate(tomorrow);
      break;
    default:
      filterByProject(sectionToRender);
      break;
  }
}
function filterByDate(wantedDate) {
  const filteredResults = listOfTasks.filter((task) => {
    return task.dueDate.getDate() == wantedDate;
  });
  TaskDisplayer.displayAllTasks(filteredResults);
}
function filterByProject(projName) {
  const filteredResults = listOfTasks.filter((task) => {
    return task.project == projName;
  });
  TaskDisplayer.displayAllTasks(filteredResults);
}
