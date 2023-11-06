import { TaskCreator, TaskDisplayer } from "./Task";
function showTaskModal() {
  const dialog = document.querySelector("dialog");
  let taskProperties = [];
  showButtonEventListener(dialog);
  closeButtonEventListener(dialog);
  taskFormValuesEventListener(dialog);
  submitButtonEventListener(dialog);
}
function showButtonEventListener(dialog) {
  const showButton = document.querySelector(".add-task-btn");

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });
}

function closeButtonEventListener(dialog) {
  const closeButton = document.querySelector("dialog button");
  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
}

function submitButtonEventListener(dialog) {
  const submitBtn = document.querySelector(".submit-task-btn");

  submitBtn.addEventListener("click", () => {});
}

function taskFormValuesEventListener(dialog) {
  const form = document.querySelector(".task-creation-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let taskProperties = [];
    dialog.close();
    const formData = new FormData(form);
    for (const pair of formData.entries()) {
      taskProperties.push(pair[1]);
    }
    let task = TaskCreator(
      taskProperties[0],
      taskProperties[1],
      taskProperties[2],
      taskProperties[3]
    );

    TaskDisplayer.displayTask(task);
  });
}

export { showTaskModal };
