function showTaskModal() {
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector(".add-task-btn");
  const closeButton = document.querySelector("dialog button");

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
}

export { showTaskModal };
