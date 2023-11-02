import { TaskCreator } from "./Task";
import header from "./Pages/header";
import sidebar from "./Pages/sidebar";
import content from "./Pages/content";
import "./style.css";
import { Card } from "./Card";

let listOfTasks = [];

header();
sidebar();
content();

const hw = TaskCreator("Homework", "Bio", "urgent");
const hw2 = TaskCreator("Homework", "Bio", "urgent");
for (let x = 0; x < 20; x++) {
  new Card(hw);
}