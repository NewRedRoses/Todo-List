export default function sidebar() {
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
    button.textContent = title;
    sidebarTasksContainer.appendChild(button);
  });

  // Tags section
  const sidebarTagsContainer = document.querySelector(".tags-options");
  const tagsTitle = document.createElement("div");
  tagsTitle.classList.add("sidebar-title");

  tagsTitle.textContent = "Tags";
  sidebarTagsContainer.appendChild(tagsTitle);

  const tagButtons = ["School", "Work", "Random"];
  tagButtons.forEach((title) => {
    const button = document.createElement("button");
    button.classList.add("tag-filter-btn");
    button.textContent = title;
    sidebarTagsContainer.appendChild(button);
  });
}
