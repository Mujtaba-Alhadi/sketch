const container = document.querySelector(".container");
const resize = document.querySelector(".resize");

function generateGrid(gridSize) {
  container.innerHTML = ""; // clear previous grid
  for (let i = 0; i < gridSize * gridSize; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.flex = `${100 / gridSize}%`;
    box.addEventListener("mouseenter", () => {
      box.style.backgroundColor = "#333";
    });
    container.appendChild(box);
  }
}
generateGrid(16);

resize.addEventListener("click", () => {
  let input = prompt("Enter a Number for The New Grid [1-100]");
  if (input === null) {
    return;
  } else if (input <= 100 && input > 0) {
    generateGrid(input);
  } else {
    alert("Please Enter a Valid Number [1-100]!");
  }
});
