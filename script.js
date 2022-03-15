const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function changeHex() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
  }

  return hex;
}

console.log(changeHex());

// for (let columns = 0; columns < 40; columns++) {
//   for (let rows = 0; rows < 0; rows++) {
//     let div = document.createElement("div");
//     div.style.width = "10px";
//     div.style.height = "10px";
//     div.textContent = "a";
//     div.style.background = changeHex();
//     document.getElementById("sketchpad").appendChild(div);
//   }
//   let br = document.createElement("br");
//   document.getElementById("sketchpad").appendChild(br);
// }

let sketchpadWidth = document.getElementById("sketchpad").clientWidth;
let cellSize = sketchpadWidth / 40 + "px";

console.log(sketchpadWidth);

for (var i = 0; i < 40; i++) {
  var row = document.createElement("div");
  row.style.flex = "1";
  for (var j = 0; j < 40; j++) {
    var cell = document.createElement("div");
    cell.style.width = cellSize;
    cell.style.height = cellSize;
    cell.classList.add("pixel", "inactive");

    cell.style.flex = "1";
    row.appendChild(cell);
  }
  document.getElementById("sketchpad").appendChild(row);
}

let pixels = document.getElementsByClassName("pixel");

// Array.from(pixels).forEach(function (pixel) {
//   pixel.addEventListener("mouseover", function (flipped) {
//     (penned.target.style.backgroundColor = "blue"), false;
//   });
// });

Array.from(pixels).forEach(function (pixel) {
  pixel.addEventListener("mouseenter", function () {
    pixel.classList.add("active-black");
  });
});

// pixel.addEventListener("mouseenter", function (flip) {
//   (flip.target.style.backgroundColor = "blue"), false;
// });
