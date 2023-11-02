export default function headerPage() {
  const header = document.querySelector(".header");

  const title = document.createElement("div");
  title.textContent = "YATA - Yet Another Todo App";
  header.appendChild(title);
}
