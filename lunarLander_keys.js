let x = 300;
let y = 0;
let a = 0.008;
let t = 0;
let c = "Congrats, you landed!";
let d = "UPS, You crashed!";
let e = "Click if you want to play";

function startscreen() {
  fill(0, 185, 200);
  rect(0, 0, 800, 800);
  fill(0, 0, 0);
  textSize(50);
  stroke(255, 0, 0);
  text(e, 100, 350);
  stroke(0, 0, 0);
}

function endscreenwinning() {
  fill(0, 255, 0);
  rect(0, 0, 800, 800);
  fill(0, 0, 0);
  textSize(60);
  stroke(255, 0, 0);
  text(c, 50, 350);
  stroke(0, 0, 0);
}

function endscreenloosing() {
  fill(255, 0, 0);
  rect(0, 0, 800, 800);
  fill(0, 0, 0);
  textSize(80);
  stroke(255, 0, 0);
  text(d, 0, 350);
  stroke(0, 0, 0);
}

function mouseClicked() {
  if (y === 0) {
    y = 1;
  }
  if (y >= 450) {
    y = 0;
    t = 0;
    loop();
  }
}

function lunarLander() {
  push();
  translate();
  fill(255, 0, 0);
  rect(x, y, 50, 50);
  fill(255, 255, 255);
  rect(x + 10, y + 10, 10, 10);
  rect(x + 30, y + 10, 10, 10);
  ellipse(x + 25, y + 35, 10, 10);
  pop();
}

function draw() {
  if (y === 0) {
    startscreen();
    v = 0;
    startscreen();
  }
  if (y > 0) {
    background(0, 185, 200);
    lunarLander();
    fill(255, 255, 255);
    textSize(20);
    text(v, 0, 20);
    text("Be slower then 1.5 to win", 0, 40);
    rect(0, 500, 700, 300);
    y = y + 2;
    t = t + 2;
    v = a * t;
    y = y + v;
    console.log(v);

    if (keyIsDown(38)) {
      y = y - 10;
      t = t - 10;
    }
    if (keyIsDown(37)) {
      x = x - 10;
    }
    if (keyIsDown(39)) {
      x = x + 10;
    }
    if (y >= 450) {
      if (v > 1.5) {
        endscreenloosing();
        console.log(d);
      } else {
        endscreenwinning();
        console.log(c);
      }
      noLoop();
    }
  }
}
