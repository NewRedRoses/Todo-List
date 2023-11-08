/* A function that will filter the current cards in the content class
to only display the cards that match the attribute: 
    for dates this would match the restriction  (Ex. Like only show tasks due today or tomorrow) 
    For "Tags" this could be to only show the tasks that have that "tag". 

    function that takes in an array 
*/
import { TaskDisplayer } from "./Task";
export default function filterBy(word) {
  console.log(word);
  switch (word) {
    case "all":
      break;
    case "today":
      break;
    case "tomorrow":
      break;
  }
}
