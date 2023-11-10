import { TaskCreator, TaskDisplayer, TaskManager } from "./Task";
import { listOfTasks } from ".";
function showTaskModal() {
  const dialog = document.querySelector("dialog");
  eventListenerHandler.showButtonEventListener(dialog);
  eventListenerHandler.closeButtonEventListener(dialog);
  eventListenerHandler.taskFormValuesEventListener(dialog);
  eventListenerHandler.submitButtonEventListener(dialog);
}

const eventListenerHandler = (() => {
  const showButtonEventListener = (dialog) => {
    const showButton = document.querySelector(".add-task-btn");
    // "Show the dialog" button opens the dialog modally
    showButton.addEventListener("click", () => {
      dialog.showModal();
    });
  };

  const closeButtonEventListener = (dialog) => {
    const closeButton = document.querySelector("dialog button");
    // "Close" button closes the dialog
    closeButton.addEventListener("click", () => {
      dialog.close();
    });
  };

  const submitButtonEventListener = (dialog) => {
    const submitBtn = document.querySelector(".submit-task-btn");
    submitBtn.addEventListener("click", () => {});
  };
  const taskFormValuesEventListener = (dialog) => {
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
      TaskManager.addThisTaskToArray(task, listOfTasks);
      TaskDisplayer.displayTask(task);
    });
  };

  return {
    showButtonEventListener,
    closeButtonEventListener,
    submitButtonEventListener,
    taskFormValuesEventListener,
  };
})();

export { showTaskModal };
