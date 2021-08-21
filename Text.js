const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
canvas2.height = window.innerHeight;
canvas2.width = window.innerWidth;
let adjustX2 = 15;
let adjustY2 = 1;
let particleArr = [];

// mouse2
const mouse2 = {
  x2: null,
  y2: null,
  radius2: 100,
};

window.addEventListener("mousemove", (event) => {
  mouse2.x2 = event.clientX;
  mouse2.y2 = event.clientY;
});
ctx2.font = "20px Verdana";
ctx2.fillText("Project", 0, 30);
const textCoordinates2 = ctx2.getImageData(0, 0, 200, 200);

class Particle2 {
  constructor(x2, y2) {
    this.x2 = x2;
    this.y2 = y2;
    this.size2 = 4;
    this.baseX2 = this.x2;
    this.baseY2 = this.y2;
    this.density2 = Math.random() * 30 + 1;
  }
  draw2() {
    ctx2.fillStyle = "White";
    ctx2.beginPath();
    ctx2.arc(this.x2, this.y2, this.size2, 0, Math.PI * 2);
    ctx2.closePath();
    ctx2.fill();
  }
  update2() {
    let dx2 = mouse2.x2 - this.x2;
    let dy2 = mouse2.y2 - this.y2;
    let distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
    let forceDirectionX2 = dx2 / distance2;
    let forceDirectionY2 = dy2 / distance2;

    let maxDistance2 = mouse2.radius2;
    let force2 = (maxDistance2 - distance2) / maxDistance2;
    let directionX2 = forceDirectionX2 * force2 * this.density2;
    let directionY2 = forceDirectionY2 * force2 * this.density2;

    if (distance2 < mouse2.radius2) {
      this.x2 -= directionX2;
      this.y2 -= directionY2;
    } else {
      if (this.x2 != this.baseX2) {
        let dx2 = this.x2 - this.baseX2;
        this.x2 -= dx2 / 5;
      }
      if (this.y2 != this.baseY2) {
        let dy2 = this.y2 - this.baseY2;
        this.y2 -= dy2 / 5;
      }
    }
  }
}

function init2() {
  particleArr = [];
  // for (let i = 0; i < 1000; i++) {
  //   let x = Math.random() * canvas2.width;
  //   let y = Math.random() * canvas2.height;
  //   particleArr.push(new Particle2(x, y));
  // }
  for (let y = 0, y2 = textCoordinates2.height; y < y2; y++) {
    for (let x = 0, x2 = textCoordinates2.width; x < x2; x++) {
      if (
        textCoordinates2.data[y * 4 * textCoordinates2.width + x * 4 + 3] > 128
      ) {
        let positionX = x + adjustX2;
        let positionY = y + adjustY2;
        particleArr.push(new Particle2(positionX * 14, positionY * 10));
      }
    }
  }
}

init2();

function animation2() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  for (let i = 0; i < particleArr.length; i++) {
    particleArr[i].draw2();
    particleArr[i].update2();
  }
  requestAnimationFrame(animation2);
  connect2();
}

animation2();

function connect2() {
  let opacityV2 = 1;
  for (let a = 0; a < particleArr.length; a++) {
    for (let b = a; b < particleArr.length; b++) {
      let dx = particleArr[a].x2 - particleArr[b].x2;
      let dy = particleArr[a].y2 - particleArr[b].y2;
      let distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 15) {
        opacityV2 = 1 - distance / 15;
        ctx2.strokeStyle = "rgba(255, 255, 255," + opacityV2 + ")";
        ctx2.lineWidth = 4;
        ctx2.beginPath();
        ctx2.moveTo(particleArr[a].x2, particleArr[a].y2);
        ctx2.lineTo(particleArr[b].x2, particleArr[b].y2);
        ctx2.stroke();
      }
    }
  }
}
