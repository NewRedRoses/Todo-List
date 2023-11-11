import content from "./content";
import { removeAllCards } from "../Card";
export default function sidebar() {
  let selectedBtn = "all";
  // Tasks section
  const sidebarTasksContainer = document.querySelector(".task-options");
  const tasksTitle = document.createElement("div");
  tasksTitle.classList.add("sidebar-title");
  tasksTitle.textContent = "Tasks";
  sidebarTasksContainer.appendChild(tasksTitle);

  const taskButtons = ["All", "Today", "Tomorrow"];
  taskButtons.forEach((title) => {
    const button = document.createElement("button");
    button.classList.add("task-filter-btn");
    button.value = title.toLowerCase();
    button.textContent = title;
    sidebarTasksContainer.appendChild(button);
    button.addEventListener("click", (e) => {
      removeAllCards();
      content(e.currentTarget.value);
    });
  });

  // Projects section
  const sidebarProjectsContainer = document.querySelector(".projects-options");
  const projectsTitle = document.createElement("div");
  projectsTitle.classList.add("sidebar-title");

  projectsTitle.textContent = "Projects";
  sidebarProjectsContainer.appendChild(projectsTitle);

  const projectButtons = ["School", "Work", "Other"];
  projectButtons.forEach((title) => {
    const button = document.createElement("button");
    button.classList.add("project-filter-btn");
    button.value = title.toLowerCase();
    button.textContent = title;
    sidebarProjectsContainer.appendChild(button);
    button.addEventListener("click", (e) => {
      removeAllCards();
      content(e.currentTarget.value);
    });
  });
}
