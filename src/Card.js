import { formatDistanceToNow } from "date-fns";
import { TaskManager } from "./Task";
import { listOfTasks } from ".";
import { setCardPriority } from "./Priority";
class Card {
  static deleteButtonCounter = 0;
  constructor(task) {
    this.task = task;
    this.cardContainer = document.createElement("div");
    this.cardContainer.classList.add("card-container");

    const topSection = document.createElement("div");
    topSection.classList.add("card-top");
    // Title and delete button section
    const topProperties = ["title", "delete"];
    topProperties.forEach((property) => {
      if (property == "title") {
        this.item = document.createElement("div");
        this.item.textContent = task[property];
      } else {
        this.item = document.createElement("button");
        this.item.textContent = "X";
        this.item.id = `deleteBtn-${Card.deleteButtonCounter}`;
        Card.deleteButtonCounter++;
      }
      this.item.classList.add(`card-${property}`);
      topSection.appendChild(this.item);
    });
    this.cardContainer.appendChild(topSection);

    // Description and due date section
    const bottomSection = document.createElement("div");
    bottomSection.classList.add("card-bottom");

    const bottomProperties = ["description", "dueDate"];
    bottomProperties.forEach((property) => {
      this.item = document.createElement("div");
      this.item.classList.add(`card-${property}`);
      if (property == "dueDate") {
        const taskDate = task[property];
        this.item.textContent = "Due in " + formatDistanceToNow(taskDate);
      } else {
        this.item.textContent = task[property];
      }
      bottomSection.appendChild(this.item);
    });
    this.cardContainer.appendChild(bottomSection);

    // Add the card container to the main container
    this.container = document.querySelector(".cards");
    this.container.appendChild(this.cardContainer);

    // Event listener section
    this.deleteBtn = document.getElementById(
      `deleteBtn-${Card.deleteButtonCounter - 1}`
    );
    this.deleteBtn.addEventListener("click", this.deleteCard.bind(this));
    setCardPriority(this.cardContainer, this.task.priority);
  }
  deleteCard() {
    TaskManager.removeThisTaskFromArray(this.task, listOfTasks);
    this.cardContainer.remove();
  }
}

function removeAllCards() {
  const container = document.querySelector(".content");
  container.innerHTML = "";
}

export { Card, removeAllCards };
