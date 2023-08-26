const shapeSelect = document.getElementById(
  "shape-select"
) as HTMLSelectElement;
const sizeInput = document.getElementById("size-input") as HTMLInputElement;
const generateButton = document.getElementById(
  "generate-button"
) as HTMLButtonElement;
const shapeContainer = document.getElementById(
  "shape-container"
) as HTMLDivElement;
const errorMessage = document.getElementById("error-message") as HTMLDivElement;

generateButton.addEventListener("click", function () {
  const shape = shapeSelect.value;
  const size = parseInt(sizeInput.value);

  if (size < 1 || size > 8) {
    errorMessage.textContent = "Size should be between 1 and 8.";
    shapeContainer.innerHTML = "";
  } else {
    errorMessage.textContent = "";
    generateShapes(shape, size);
  }
});

sizeInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    generateButton.click();
  }
});

function generateShapes(shape: string, size: number) {
  shapeContainer.innerHTML = "";

  for (let i = 0; i < size; i++) {
    const box = document.createElement("div");
    box.classList.add("box");

    if (shape === "circle") {
      box.style.borderRadius = "50%";
    } else if (shape === "triangle") {
      box.style.width = "0";
      box.style.height = "0";
      box.style.background = "white";
      box.style.borderBottom = "100px solid red";
      box.style.borderLeft = "50px solid transparent";
      box.style.borderRight = "50px solid transparent";
    } else if (shape === "square") {
      box.style.borderRadius = "0";
    }
    shapeContainer.appendChild(box);
  }
}
