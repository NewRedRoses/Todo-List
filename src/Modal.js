function showTaskModal() {
  const dialog = document.querySelector("dialog");

  showButtonEventListener(dialog);
  closeButtonEventListener(dialog);
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

  submitBtn.addEventListener("click", () => {
    dialog.close();
  });
}

export { showTaskModal };
