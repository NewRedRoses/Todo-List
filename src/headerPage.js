export default function headerPage(container) {
  const header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "Tasks To Do";
  container.appendChild(header);
}
