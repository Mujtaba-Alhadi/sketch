const container = document.querySelector(".container");
const resizeBtn = document.querySelector(".resize");
const rainbowBtn = document.querySelector(".rainbow");
const colorInput = document.querySelector(".colorInput");

function generateRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red} ${green} ${blue})`;
}

rainbowBtn.addEventListener("click", () => {
  rainbowBtn.classList.toggle("active");
});

function generateGrid(gridSize) {
  container.innerHTML = ""; // clear previous grid
  const boxSize = 400 / gridSize;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    box.addEventListener("mouseenter", () => {
      if (rainbowBtn.classList[1] === "active") {
        box.style.backgroundColor = generateRandomColor();
      } else {
        box.style.backgroundColor = colorInput.value;
      }
    });
    
    container.appendChild(box);
  }
}

generateGrid(16);

resizeBtn.addEventListener("click", () => {
  let input = prompt("Enter a Number for The New Grid [1-100]");
  if (input === null) {
    return;
  } else if (input <= 100 && input > 0) {
    generateGrid(input);
  } else {
    alert("Please Enter a Valid Number [1-100]!");
  }
});