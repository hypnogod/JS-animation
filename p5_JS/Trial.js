// function setup() {
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //Neck
  fill(216, 159, 124);
  rect(235, 370, 50, 50, 0);

  //Ears
  fill(216, 159, 124);
  arc(150, 265, 40, 60, 0, PI + HALF_PI, OPEN);
  arc(370, 265, 40, 60, 0, PI * 2, OPEN);
  // arc(370, 265, 40, 60, 0, PI + PI + HALF_PI, OPEN)

  //Face
  noStroke();
  fill(224, 171, 138);
  ellipse(260, 255, 200, 260);

  //Eyebrows
  stroke(21, 19, 19);
  strokeWeight(6);
  noFill();
  arc(210, 235, 45, 15, PI, TWO_PI, OPEN);
  arc(310, 235, 45, 15, PI, TWO_PI, OPEN);

  //Hairs
  noStroke();
  fill(32, 19, 19);
  arc(300, 150, 150, 100, 0, PI + QUARTER_PI, CHORD);
  arc(180, 120, 140, 148, 0, 0.75 * Math.PI);
  // side
  arc(170, 220, 60, 90, (1.5 * PI) / 2.75, (5 * PI) / 3);
  arc(350, 220, 60, 90, (-1.5 * PI) / 2.5, (-5 * PI) / 3.1);
  //top
  triangle(173, 100, 185, 130, 175, 120);
  //triangle(223, 110, 295, 130, 175, 120);
  triangle(283, 100, 305, 130, 255, 190);

  //  glasses
  stroke(21, 19, 19);
  strokeWeight(3);
  fill(255, 30);
  rect(180, 240, 60, 40, 10);
  rect(280, 240, 60, 40, 10);
  line(240, 260, 280, 260);

  //Eyes
  noStroke();
  strokeWeight(1);
  fill(32, 19, 19);
  ellipse(210, 260, 28, 25);
  ellipse(310, 260, 28, 25);

  //Eyeballs
  noStroke();
  fill(255);
  ellipse(207, 252, 8, 8);
  ellipse(306, 252, 8, 8);

  //Nose
  //fill(247, 221, 155, )

  fill(225, 156, 117);
  triangle(260, 275, 270, 300, 250, 300);
  ellipse(260, 295, 15, 26);
  fill(220, 156, 117);
  ellipse(270, 300, 10, 10);
  ellipse(250, 300, 10, 10);

  //Mouth
  fill(184, 105, 106);
  arc(260, 325, 49, 35, 0, PI);
  stroke(123, 69, 69);
  strokeWeight(1);
  arc(260, 326, 49, 15, TWO_PI, PI);

  //Hoodie
  noStroke();
  rectMode(CENTER);
  fill(255, 0, 0);
  rect(260, 470, 205, 150, 20);
  fill(255, 104, 129);
  triangle(135, 435, 170, 360, 330, 470);
  triangle(360, 380, 390, 460, 200, 435);
  fill(205);
  ellipse(300, 432, 15, 15);
  ellipse(220, 432, 15, 15);
  rect(300, 460, 8, 65, 20);
  rect(220, 460, 8, 65, 20);
}
