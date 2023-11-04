import { showTaskModal } from "/src/Modal.js";
export default function headerPage() {
  const header = document.querySelector(".header");

  const title = document.createElement("div");
  title.textContent = "YATA - Yet Another Todo App";
  header.appendChild(title);
  // Create task/ project button

  const createTaskBtn = document.createElement("button");
  createTaskBtn.textContent = "+";
  createTaskBtn.classList.add("add-task-btn");
  header.appendChild(createTaskBtn);
  showTaskModal();
}
