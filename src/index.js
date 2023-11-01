import { Task } from "./Task";
import headerPage from "./headerPage";
import "./style.css";

const container = document.createElement("div");
container.classList.add("container");

headerPage(container);
const test = new Task("Do hw", "finish bio and chem hw");
console.log(test);

const body = document.querySelector("body");
body.appendChild(container);
