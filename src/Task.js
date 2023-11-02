class Task {
  constructor(title, description, dueDate, priority, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
  }
}

function TaskCreator(title, description, dueDate, priority, checklist) {
  return new Task(title, description, dueDate, priority, checklist);
}

const TaskManager = (() => {
  const addThisTaskToArray = (task, array) => array.push(task);
  const removeThisTaskFromArray = (task, array) => {
    const index = array.indexOf(task);
    if (index !== -1) {
      console.log("Task found in this array..removing");
      array.splice(index, 1);
    } else {
      console.log("Task not in this array");
    }
  };
  return { addThisTaskToArray, removeThisTaskFromArray };
})();

export { Task, TaskManager, TaskCreator };
