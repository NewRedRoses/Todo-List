import { TaskDisplayer } from "../Task";
import { listOfTasks } from "..";

export default function content(sectionToRender) {
  const container = document.querySelector(".content");
  const sampleText = document.createElement("div");
  container.appendChild(sampleText);

  // Handle today
  let date = new Date();
  const today = date.getDate();
  // Handle tomorrow (works for end of month)
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow = tomorrow.getDate();
  switch (sectionToRender) {
    case "all":
      TaskDisplayer.displayAllTasks(listOfTasks);
      break;
    case "today":
      // In theory would need to be more robust than just today's digit
      // It would need to have the same day, month and year.
      const listOfTodayTasks = listOfTasks.filter((task) => {
        return task.dueDate.getDate() == today;
      });
      TaskDisplayer.displayAllTasks(listOfTodayTasks);
      break;
    case "tomorrow":
      const listOfTomorrowTasks = listOfTasks.filter((task) => {
        return task.dueDate.getDate() == tomorrow;
      });
      TaskDisplayer.displayAllTasks(listOfTomorrowTasks);
      break;
  }
}
