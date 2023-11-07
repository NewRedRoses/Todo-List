import { TaskManager } from "./Task";
class Card {
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
      this.item.textContent = task[property];
      bottomSection.appendChild(this.item);
    });
    this.cardContainer.appendChild(bottomSection);

    // Add the card container to the main container
    const container = document.querySelector(".content");
    container.appendChild(this.cardContainer);

    // Event listener section
    this.cardContainer.addEventListener(
      "click",
      this.onCardClickRun.bind(this)
    );
  }
  onCardClickRun() {
    console.log(this.task.title);
  }
}

function deleteCard() {}
export { Card };
