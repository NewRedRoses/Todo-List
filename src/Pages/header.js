export default function headerPage() {
  const header = document.querySelector(".header");

  const title = document.createElement("div");
  title.textContent = "Yet Another Todo App (YATA)";
  header.appendChild(title);
}
