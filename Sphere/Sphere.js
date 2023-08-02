//  Reference: https://codepen.io/pirobtumen/pen/vObLqR

let numberOfParticles = 3000;
let color = !true;
//var updateFrequency = 1;
var angleD = 1000;
var ZangleD = 300;
var max_radius = 3;
var min_radius = 2;

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas4");
  const ctx = canvas.getContext("2d"); // make the canvas drawable

  // Set canvas size.
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // center the canvas
  let centerX = canvas.width / 2;
  let centerY = canvas.height / 2;

  // center the object
  let maxX = centerX - 100;
  let maxY = centerY - 100;

  const range = maxX > maxY ? maxY : maxX;
  let particlesArr = []; // store particles

  class Particles {
    constructor() {
      this.angle = Math.random() * 2 * Math.PI;
      this.vangle = (Math.random() * 0.5) / angleD;
      this.zangle = Math.random() * 10 * Math.PI;
      this.zvelangle = Math.random() / ZangleD;
      this.x;
      this.y;
      this.r = max_radius * Math.random();
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

    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
    }

    update() {
      // Update coordinates
      this.y = centerY + range * Math.cos(this.angle);
      this.x = centerX + range * Math.cos(this.zangle) * Math.sin(this.angle);

      // Update angle
      this.angle += this.vangle;
      this.zangle += this.zvelangle;

      // Change radius on Z axis
      if (Math.sin(this.zangle) > 0.5 && this.r < max_radius) this.r += 0.01;
      else if (this.r > min_radius) this.r -= 0.01;
    }
  }
  function init() {
    for (var i = 0; i < numberOfParticles; i++) {
      particlesArr.push(new Particles());
    }
  }

  function animate() {
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArr.length; i++) {
      particlesArr[i].update();
      particlesArr[i].draw();
    }
    requestAnimationFrame(animate);
  }

  init();
  animate();

  // to make sure the Sphere is in the center
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
  });
});
