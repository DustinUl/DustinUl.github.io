Score = [0, 0];
let r = 200;
screen = 0;
rotation = 1;

var puck = {
  x: width / 2,
  y: height / 2,
  xspeed: 0,
  yspeed: 0,
};

var paddles = {
  x: 0,
  y: height / 2 - 60,
  x2: width - 15,
  y2: height / 2 - 60,
};

function Startscreen() {
  let y = 5;
  let x = 5;
  let r = 0;
  background(0);
  for (let i = 0; i < width; i = i + 25) {
    fill(r + 255, r + 255, r + 255, 50);
    noStroke();
    ellipse(x + i, y, 10);
    ellipse(x + i, y + 50, 10);
    ellipse(x + i, y + 100, 10);
    ellipse(x + i, y + 150, 10);
    ellipse(x + i, y + 200, 10);
    ellipse(x + i, y + 250, 10);
    ellipse(x + i, y + 300, 10);
    ellipse(x + i, y + 350, 10);
    ellipse(x + i, y + 400, 10);
    ellipse(x + i, y + 450, 10);
    ellipse(x + i, y + 500, 10);
    ellipse(x + i, y + 550, 10);
    ellipse(x + i, y + 600, 10);
    for (let i = 0; i < height; i = i + 25) {
      fill(r + 255, r + 255, r + 255, 5);
      noStroke();
      ellipse(x, y + i, 10);
      ellipse(x + 50, y + i, 10);
      ellipse(x + 100, y + i, 10);
      ellipse(x + 150, y + i, 10);
      ellipse(x + 200, y + i, 10);
      ellipse(x + 250, y + i, 10);
      ellipse(x + 300, y + i, 10);
      ellipse(x + 350, y + i, 10);
      ellipse(x + 400, y + i, 10);
      ellipse(x + 450, y + i, 10);
      ellipse(x + 500, y + i, 10);
      ellipse(x + 550, y + i, 10);
      ellipse(x + 600, y + i, 10);
      ellipse(x + 650, y + i, 10);
    }
  }
  stroke(r + 255, r + 255, r + 255);
  strokeWeight(4);
  fill(r + 50, r + 205, r + 50);
  textSize(90);
  textStyle(BOLD);
  text("RETRO PONG", width / 2 - 305, 110);
  textSize(20);
  textStyle(ITALIC);
  rect(width / 2 - 108, 300, 200, 30);
  fill(0);
  text("Start", width / 2 - 30, 323);
}

function WinscreenP1() {
  let y = 5;
  let x = 5;
  push();
  translate(x, y);
  rotate(rotation);
  background(0);
  for (let i = 0; i < width; i = i + 25) {
    fill(255, 255, 255, 50);
    noStroke();
    ellipse(x + i, y, 10);
    ellipse(x + i, y + 50, 10);
    ellipse(x + i, y + 100, 10);
    ellipse(x + i, y + 150, 10);
    ellipse(x + i, y + 200, 10);
    ellipse(x + i, y + 250, 10);
    ellipse(x + i, y + 300, 10);
    ellipse(x + i, y + 350, 10);
    ellipse(x + i, y + 400, 10);
    ellipse(x + i, y + 450, 10);
    ellipse(x + i, y + 500, 10);
    ellipse(x + i, y + 550, 10);
    ellipse(x + i, y + 600, 10);
    for (let i = 0; i < height; i = i + 25) {
      fill(255, 255, 255, 5);
      noStroke();
      ellipse(x, y + i, 10);
      ellipse(x + 50, y + i, 10);
      ellipse(x + 100, y + i, 10);
      ellipse(x + 150, y + i, 10);
      ellipse(x + 200, y + i, 10);
      ellipse(x + 250, y + i, 10);
      ellipse(x + 300, y + i, 10);
      ellipse(x + 350, y + i, 10);
      ellipse(x + 400, y + i, 10);
      ellipse(x + 450, y + i, 10);
      ellipse(x + 500, y + i, 10);
      ellipse(x + 550, y + i, 10);
      ellipse(x + 600, y + i, 10);
      ellipse(x + 650, y + i, 10);
    }
  }
  stroke(255, 255, 255);
  strokeWeight(4);
  fill(50, 205, 50);
  textSize(150);
  textStyle(BOLD);
  text("PLAYER1", width / 2 - 335, 300);
  text("WINS", width / 2 - 200, 450);
}

function WinscreenP2() {
  let y = 5;
  let x = 5;
  push();
  translate(x, y);
  rotate(rotation);
  background(0);
  for (let i = 0; i < width; i = i + 25) {
    fill(255, 255, 255, 50);
    noStroke();
    ellipse(x + i, y, 10);
    ellipse(x + i, y + 50, 10);
    ellipse(x + i, y + 100, 10);
    ellipse(x + i, y + 150, 10);
    ellipse(x + i, y + 200, 10);
    ellipse(x + i, y + 250, 10);
    ellipse(x + i, y + 300, 10);
    ellipse(x + i, y + 350, 10);
    ellipse(x + i, y + 400, 10);
    ellipse(x + i, y + 450, 10);
    ellipse(x + i, y + 500, 10);
    ellipse(x + i, y + 550, 10);
    ellipse(x + i, y + 600, 10);
    for (let i = 0; i < height; i = i + 25) {
      fill(255, 255, 255, 5);
      noStroke();
      ellipse(x, y + i, 10);
      ellipse(x + 50, y + i, 10);
      ellipse(x + 100, y + i, 10);
      ellipse(x + 150, y + i, 10);
      ellipse(x + 200, y + i, 10);
      ellipse(x + 250, y + i, 10);
      ellipse(x + 300, y + i, 10);
      ellipse(x + 350, y + i, 10);
      ellipse(x + 400, y + i, 10);
      ellipse(x + 450, y + i, 10);
      ellipse(x + 500, y + i, 10);
      ellipse(x + 550, y + i, 10);
      ellipse(x + 600, y + i, 10);
      ellipse(x + 650, y + i, 10);
    }
  }
  stroke(255, 255, 255);
  strokeWeight(4);
  fill(50, 205, 50);
  textSize(150);
  textStyle(BOLD);
  text("PLAYER2", width / 2 - 335, 300);
  text("WINS", width / 2 - 200, 450);
}

function mouseClicked() {
  if (
    mouseClicked &&
    mouseX > 230 &&
    mouseX < 430 &&
    mouseY > 300 &&
    mouseY < 330
  ) {
    console.log("clicked");
    screen++;
  }
}

function reset() {
  if (puck.x >= width - 12.5) {
    puck.xspeed = puck.xspeed * -1;
    puck.x = width / 2;
    puck.y = height / 2;
    Score[0]++;
    puck.xspeed = 0;
    puck.yspeed = 0;
    r = r - 10;
  }
  if (puck.x <= +12.5) {
    puck.xspeed = puck.xspeed * -1;
    puck.x = width / 2;
    puck.y = height / 2;
    Score[1]++;
    puck.xspeed = 0.000000001;
    puck.yspeed = 0;
    r = r - 10;
  }
  //Keyscape to restart
  if (keyIsDown(32) && puck.xspeed === 0) {
    puck.xspeed = puck.xspeed + 15;
    puck.yspeed = 0;
  }
  if (keyIsDown(32) && puck.xspeed === 0.000000001) {
    puck.xspeed = puck.xspeed - 15;
    puck.yspeed = 0;
  }
}

function updatepuck() {
  puck.x = puck.x + puck.xspeed;
  puck.y = puck.y + puck.yspeed;
}

function edges() {
  if (puck.y <= 25 || puck.y >= height - 25) {
    puck.yspeed = puck.yspeed * -1;
  }
}

function playball() {
  ellipse(puck.x, puck.y, 25);
}

function middleline() {
  stroke(50, 205, 50);
  line(width / 2, 0, width / 2, height);
}

function paddleleft() {
  rect(paddles.x, paddles.y, 15, 100);
}

function paddleright() {
  rect(paddles.x2, paddles.y2, 15, 100);
}

function ballbounce() {
  if (
    (puck.x >= paddles.x2 - 25 &&
      puck.y + 12.5 >= paddles.y2 &&
      puck.y - 12.5 <= paddles.y2 + 100) ||
    (puck.x <= paddles.x + 25 &&
      puck.y + 12.5 >= paddles.y &&
      puck.y - 12.5 <= paddles.y + 100)
  ) {
    puck.xspeed = puck.xspeed * -1;
    puck.yspeed = random(-8, 8);
  }
}

//Where the magic`s happening
function draw() {
  background(0, r);
  middleline();
  fill(200);
  noStroke();
  textSize(20);
  stroke(50, 205, 50);
  strokeWeight(1.4);
  text("(PRESS KEYSCAPE TO CONTINUE THE GAME) ", width / 6, height - 20);
  noStroke();
  fill(50, 205, 50);
  textSize(70);
  textStyle(BOLD);
  text(Score[0], 140, 70);
  text(Score[1], width - 190, 70);
  updatepuck();
  edges();
  paddleleft();
  paddleright();
  playball();
  ballbounce();
  reset();
  if (screen === 0) {
    Startscreen();
    mouseClicked();
  }
  if (screen === 3) {
    WinscreenP1();
    rotation = rotation - 0.04;
    if (rotation <= 0) {
      rotation = 0;
      screen = 0;
    }
  }
  if (screen === 4) {
    WinscreenP2();
    rotation = rotation - 0.04;
    if (rotation <= 0) {
      rotation = 0;
      screen = 0;
    }
  }

  //Score-Reset
  if (Score[0] >= 10) {
    Score[0] = 0;
    Score[1] = 0;
    r = 200;
    screen = 3;
  }
  if (Score[1] >= 10) {
    Score[0] = 0;
    Score[1] = 0;
    r = 200;
    screen = 4;
  }
  //Arrow up right side
  if (keyIsDown(38)) {
    paddles.y2 = paddles.y2 - 20;
    //Top-Edge Paddle right
    if (paddles.y2 <= -15) {
      paddles.y2 = paddles.y2 + 20;
    }
  }

  //Arrow down right side
  if (keyIsDown(40)) {
    paddles.y2 = paddles.y2 + 20;
    //Bottom-Edge Paddle right
    if (paddles.y2 >= height - 87) {
      paddles.y2 = paddles.y2 - 20;
    }
  }

  //Arrow up left side
  if (keyIsDown(87)) {
    paddles.y = paddles.y - 20;
    if (paddles.y < -15) {
      paddles.y = paddles.y + 20;
    }
  }

  //Arrow down left side
  if (keyIsDown(83)) {
    paddles.y = paddles.y + 20;
  }
  if (paddles.y >= height - 87) {
    paddles.y = paddles.y - 20;
  }
}
