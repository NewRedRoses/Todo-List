class Card {
  constructor(task) {
    this.task = task;
    this.cardContainer = document.createElement("div");
    this.cardContainer.classList.add("card-container");

    const taskPropertiesToUse = ["title", "description", "dueDate"];
    taskPropertiesToUse.forEach((property) => {
      this.item = document.createElement("div");
      this.item.classList.add(`card-${property}`);
      this.item.textContent = task[property];
      this.cardContainer.appendChild(this.item);
    });

    const container = document.querySelector(".content");
    container.appendChild(this.cardContainer);

    this.cardContainer.addEventListener("click", this.expandCard.bind(this));
  }
  expandCard() {
    console.log(this.task.title);
  }
}

export { Card };
