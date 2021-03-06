// Generate random colors
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function randomColorHex() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }

  return hex;
}

// Get sizes for the sketchpad grid: how many cells across, the width of the sketchpad on the screen, the size of each cell.
let pixelNumber = 16;
let sketchpadWidth = document.getElementById("sketchpad").clientWidth;
// let cellSize = sketchpadWidth / pixelNumber + "px";

// Create the sketchpad grid.
function createSketchPad(pixels) {
  let cellSize = sketchpadWidth / pixelNumber + "px";
  for (let i = 0; i < pixels; i++) {
    var row = document.createElement("div");
    row.style.flex = "1";
    for (let j = 0; j < pixels; j++) {
      let cell = document.createElement("div");
      cell.style.width = cellSize;
      cell.style.height = cellSize;
      cell.classList.add("pixel");
      cell.style.flex = "1";
      row.appendChild(cell);
    }
    document.getElementById("sketchpad").appendChild(row);
  }
}
createSketchPad(pixelNumber);

let pixels = document.getElementsByClassName("pixel");
// Default mouseover color change effect on cells.
[].forEach.call(pixels, function (pixel) {
  pixel.addEventListener("mouseover", function (item) {
    item.target.style.backgroundColor = "black";
  });
});

let slider = document.getElementById("sizeSlider");

// Change size of sketchpad grid.
let sizeButton = document.getElementById("newSizeButton");
newSizeButton.addEventListener("click", function () {
  document.getElementById("sketchpad").replaceChildren();
  // TODO: Change this to reflect actual user choice and not just "100"
  let cellSize = sketchpadWidth / slider.value + "px";
  let pixels = slider.value;
  for (let i = 0; i < pixels; i++) {
    let row = document.createElement("div");
    row.style.flex = "1";
    for (let j = 0; j < pixels; j++) {
      let cell = document.createElement("div");
      cell.style.width = cellSize;
      cell.style.height = cellSize;
      cell.classList.add("pixel");
      cell.style.flex = "1";
      row.appendChild(cell);
    }
    document.getElementById("sketchpad").appendChild(row);
  }
  blackButton.click();
});

let sliderValue = document.getElementById("sliderValue");
sliderValue.textContent = slider.value;

slider.oninput = function () {
  sliderValue.innerHTML = this.value;
};

// Generate random colors.
let randomColorButton = document.getElementById("randomColorButton");
randomColorButton.addEventListener("click", function () {
  [].forEach.call(pixels, function (pixel) {
    pixel.addEventListener("mouseover", function (item) {
      item.target.style.backgroundColor = randomColorHex();
    });
  });
});

// Generate only black again.
let blackButton = document.getElementById("blackButton");
blackButton.addEventListener("click", function () {
  [].forEach.call(pixels, function (pixel) {
    pixel.addEventListener("mouseover", function (item) {
      item.target.style.backgroundColor = "black";
    });
  });
});

// Clear the grid.
let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function () {
  for (let i = 0, max = pixels.length; i < max; i++) {
    pixels[i].style.backgroundColor = "white";
  }
});

// // THIS WORKED, but is adding a class to change the color.
// Array.from(pixels).forEach(function (pixel) {
//   pixel.addEventListener("mouseenter", function () {
//     pixel.classList.add("active-black");
//   });
// });
