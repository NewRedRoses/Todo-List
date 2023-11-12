function setCardPriority (cardContainer, priorityValue) {
  /*
         This function will take the task's priority value and
         assign a class based on that value.

         There's three values: low, medium, high
*/
  console.log(cardContainer)
  switch (priorityValue) {
    case 'low':
      cardContainer.classList.add('low-priority')
      break
    case 'med':
      cardContainer.classList.add('med-priority')
      break
    case 'high':
      cardContainer.classList.add('high-priority')
      break
  }
}

export { setCardPriority }
