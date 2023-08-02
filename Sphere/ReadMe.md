# Creating Particle Sphere Animation using HTML5 Canvas and JavaScript

The code is based on the concept of creating and animating particles with random positions, sizes, and colors, resulting in an ever-changing sphere-like shape. The animation is responsive to the window size and will always be centered on the screen.

## Introduction
Before we delve into the code, let's understand the basic components and how they work together to create the animation:

- HTML5 Canvas
	- Powerful and flexible feature that allows us to create dynamic graphics and animations using JavaScript. 
	- It provides a drawing context that we can use to draw shapes, images, and other graphical elements on a webpage.

- JavaScript 
	- Scripting language used to add interactivity to web pages. 
	- In this animation, JavaScript is responsible for handling particle movement, updating positions, and rendering on the Canvas.

## Setting Up the Canvas and Particles
The first part of the code initializes the necessary variables and sets up the canvas:

```javascript
let numberOfParticles = 3000;
let color = !true; // A boolean flag to determine if particles should have random colors or not
var angleD = 1000; // Controls the variation in particle angles
var ZangleD = 300; // Controls the variation in particle angles on the Z-axis
var max_radius = 3; // The maximum radius of particles
var min_radius = 2; // The minimum radius of particles
```

The code begins by declaring and initializing variables such as `numberOfParticles`, which determines the number of particles, and `color`, which decides if the particles will have random colors.

Next, the code sets up the HTML5 Canvas element, configures its size, and centers it on the screen:

```javascript
window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas4");
  const ctx = canvas.getContext("2d");

  // Set canvas size.
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Center the canvas.
  let centerX = canvas.width / 2;
  let centerY = canvas.height / 2;
```

## Particle Class
The core of the animation is the `Particles` class, which represents individual particles in the animation. Each particle is initialized with random values for its position, velocity angles, size, and color.

```javascript
  class Particles {
    constructor() {
      // Particle's position angles.
      this.angle = Math.random() * 2 * Math.PI;
      this.vangle = (Math.random() * 0.5) / angleD;
      this.zangle = Math.random() * 10 * Math.PI;
      this.zvelangle = Math.random() / ZangleD;
      
      // Particle's position.
      this.x;
      this.y;
      
      // Particle's size (radius).
      this.r = max_radius * Math.random();
      
      // Particle's color (random or red).
      this.color = color
        ? "rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "255)"
        : "red";
    }

    // Draw the particle on the canvas.
    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Update particle's position and size.
    update() {
      // Update coordinates based on angles.
      this.y = centerY + range * Math.cos(this.angle);
      this.x = centerX + range * Math.cos(this.zangle) * Math.sin(this.angle);

      // Update angles.
      this.angle += this.vangle;
      this.zangle += this.zvelangle;

      // Change particle's size on the Z-axis.
      if (Math.sin(this.zangle) > 0.5 && this.r < max_radius) this.r += 0.01;
      else if (this.r > min_radius) this.r -= 0.01;
    }
  }
```

The `draw()` method is responsible for rendering each particle on the canvas, and the `update()` method is responsible for updating the particle's position and size during each animation frame.

## Initialization and Animation
After defining the Particle class, the code initializes the particles and sets up the animation loop:

```javascript
function init() {
  for (var i = 0; i < numberOfParticles; i++) {
    particlesArr.push(new Particles());
  }
}

function animate() {
  // Clear the canvas and fill it with a black background.
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Update and draw each particle.
  for (let i = 0; i < particlesArr.length; i++) {
    particlesArr[i].update();
    particlesArr[i].draw();
  }

  // Request the next animation frame.
  requestAnimationFrame(animate);
}

// Initialize particles and start the animation loop.
init();
animate();
```

The `init()` function creates a specified number of particles (as defined in `numberOfParticles`) and stores them in the `particlesArr` array. The `animate()` function is the main animation loop, which clears the canvas, updates each particle, and then draws them. The loop is repeated using `requestAnimationFrame(animate)` to create a smooth animation.

## Window Resize Handling
Lastly, to ensure that the sphere remains centered when the window is resized, an event listener is added:

```javascript
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
});
```

When the window is resized, the canvas size is updated to match the new window dimensions, and the `centerX` and `centerY` variables are adjusted to keep the sphere centered.
