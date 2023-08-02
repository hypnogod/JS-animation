## Creating a Beautiful Randomized Tree with HTML Canvas and JavaScript

> Simple yet elegant way to generate a beautiful randomized tree using the HTML Canvas element and JavaScript.

##### Introduction

Before we dive into the details of the code, let's take a moment to understand what each part does. The code starts by setting up the HTML canvas and obtaining the 2D rendering context (`ctx`). It also sets the canvas width and height to match the browser window.

```javascript
const canvas = document.getElementById("canvas3");
const generateButton = document.getElementById("generateTree");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
let curve = 10;
let curve2 = 0;
```

- `canvas`: Represents the HTML canvas element where we'll be drawing the tree.
- `generateButton`: Represents the button element used to trigger the generation of a new randomized tree.
- `ctx`: The 2D rendering context of the canvas, which is used to draw on the canvas.
- `curve` and `curve2`: Variables that control the curves of the tree branches.

##### Drawing the Tree:

The `drawTree` function is the heart of the code, responsible for generating the tree structure. Let's break down this function step-by-step:

```javascript
function drawTree(startX, startY, len, angle, branchWidth, color1, color2) {
  ctx.beginPath();
  ctx.save();
  ctx.strokeStyle = color1;
  ctx.fillStyle = color2;
  ctx.shadowBlur = 15;
  ctx.shadowColor = "rgba(0, 0, 0, .5)";
  ctx.lineWidth = branchWidth;
  ctx.translate(startX, startY);
  ctx.rotate(angle * (Math.PI / 180));
  ctx.moveTo(0, 0);
```

- `ctx.beginPath()`: Begins a new path for the tree drawing.
- `ctx.save()`: Saves the current state of the canvas context, allowing us to later restore it.
- `ctx.strokeStyle`: Sets the stroke color of the tree branches.
- `ctx.fillStyle`: Sets the fill color used for drawing the leaves of the tree.
- `ctx.shadowBlur` and `ctx.shadowColor`: Add a shadow effect to the tree branches.
- `ctx.lineWidth`: Sets the width of the tree branches.
- `ctx.translate(startX, startY)`: Translates the canvas origin to the starting point of the tree.
- `ctx.rotate(angle * (Math.PI / 180))`: Rotates the canvas context by the given angle in radians.
- `ctx.moveTo(0, 0)`: Moves the starting point of the path to the origin (0, 0).

Next, we use a Bezier curve to draw the main trunk of the tree:

```javascript
if (angle > 0) {
  ctx.bezierCurveTo(curve2, -len / 2, curve2, -len / 2, 0, -len);
} else {
  ctx.bezierCurveTo(curve2, -len / 2, -curve2, -len / 2, 0, -len);
}
ctx.stroke();
```

- `ctx.bezierCurveTo()`: Draws a Bezier curve with control points to create a smooth curve for the branches. The curve direction depends on the value of the `angle` variable.

Next, we check if the length of the branch is small enough to draw the leaves, and if so, we draw a semi-circular leaf shape:

```javascript
if (len < 7) {
  ctx.beginPath();
  ctx.arc(0, -len, 20, 0, Math.PI / 2);
  ctx.fill();
  ctx.restore();
  return;
}
```

- `ctx.arc()`: Draws an arc to create a semi-circular shape for the leaves.

Lastly, we recursively call the `drawTree` function to draw two smaller branches on each side of the current branch:

```javascript
drawTree(0, -len, len * 0.75, angle + curve, branchWidth * 0.6);
drawTree(0, -len, len * 0.75, angle - curve, branchWidth * 0.6);
ctx.restore();
```

The recursion continues until the branch length becomes less than 7, at which point the leaves are drawn. The `ctx.restore()` function restores the canvas context to the previously saved state before drawing the branches.

##### Generating a Randomized Tree:

The `generateRandom()` function is responsible for generating a new randomized tree each time the user clicks the "Generate Tree" button:

```javascript
function generateRandom() {
  // Clear the canvas to prepare for the new tree
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Randomize tree parameters
  let centerpointX = canvas.width / 2;
  let len = Math.floor(Math.random() * 20 + 100);
  let angle = 0;
  let branchWidth = Math.random() * 70 + 1;
  let color1 =
    "rgb(" +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    ")";
  let color2 =
    "rgb(" +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    ")";

  // Apply new colors and curves to the "Generate Tree" button
  generateButton.style.background = color1;
  curve = Math.random() * 20 + 2;
  curve2 = Math.random() * 50 + 2;
  generateButton.style.color = color2;

  // Draw the new tree
  drawTree(centerpointX, canvas.height - 80, len, angle, branchWidth, color1, color2);
}

// Attach the generateRandom() function to the "Generate Tree" button click event
generateButton.addEventListener("click", generateRandom);
```
