Score = [0, 0];
let r = 200;
let g = random(0, 255);
let b = random(0, 255);

var puck = {
  x: width / 2,
  y: height / 2,
  xspeed: 0,
  yspeed: 0,
};

var paddles = {
  x: 0,
  y: height / 2 - 75,
  x2: width - 15,
  y2: height / 2 - 75,
};

function reset() {
  if (puck.x >= width + 12.5) {
    puck.xspeed = puck.xspeed * -1;
    puck.x = width / 2;
    puck.y = height / 2;
    Score[0]++;
    puck.xspeed = 0;
    puck.yspeed = 0;
    r = r - 10;
  }
  if (puck.x <= -12.5) {
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
  if (puck.y <= 12.5 || puck.y >= height - 12.5) {
    puck.yspeed = puck.yspeed * -1;
  }
}

function playball() {
  ellipse(puck.x, puck.y, 25);
}

function middleline() {
  stroke(90, 255, 210);
  line(width / 2, 0, width / 2, height);
}

function paddleleft() {
  rect(paddles.x, paddles.y, 15, 150);
}

function paddleright() {
  rect(paddles.x2, paddles.y2, 15, 150);
}

function ballbounce() {
  if (
    (puck.x >= paddles.x2 - 12.5 &&
      puck.y + 12.5 >= paddles.y2 &&
      puck.y - 12.5 <= paddles.y2 + 150) ||
    (puck.x <= paddles.x + 15 + 12.5 &&
      puck.y + 12.5 >= paddles.y &&
      puck.y - 12.5 <= paddles.y + 150)
  ) {
    puck.xspeed = puck.xspeed * -1;
    puck.yspeed = random(-10, 10);
  }
}

//Where the magic`s happening
function draw() {
  background(0, r);
  middleline();
  fill(0, 0, 0);
  noStroke();
  textSize(13);
  textStyle(ITALIC);
  stroke(90, 255, 210);
  strokeWeight(3);
  text("(PRESS KEYSCAPE TO CONTINUE THE GAME) ", width / 3.5, height - 20);
  noStroke();
  fill(90, 255, 210);
  textSize(100);
  text(Score[0], 50, 100);
  text(Score[1], width - 120, 100);
  updatepuck();
  edges();
  playball();
  paddleleft();
  paddleright();
  ballbounce();
  reset();

  //Score-Reset
  if (Score[0] >= 10) {
    Score[0] = 0;
    Score[1] = 0;
    r = 200;
  }
  if (Score[1] >= 10) {
    Score[0] = 0;
    Score[1] = 0;
    r = 200;
  }
  //Arrow up right side
  if (keyIsDown(38)) {
    paddles.y2 = paddles.y2 - 20;
    //Top-Edge Paddle right
    if (paddles.y2 <= -10) {
      paddles.y2 = paddles.y2 + 20;
    }
  }

  //Arrow down right side
  if (keyIsDown(40)) {
    paddles.y2 = paddles.y2 + 20;
    //Bottom-Edge Paddle right
    if (paddles.y2 >= height - 130) {
      paddles.y2 = paddles.y2 - 20;
    }
  }

  //Arrow up left side
  if (keyIsDown(87)) {
    paddles.y = paddles.y - 20;
    if (paddles.y <= -7.5) {
      paddles.y = paddles.y + 20;
    }
  }

  //Arrow down left side
  if (keyIsDown(83)) {
    paddles.y = paddles.y + 20;
  }
  if (paddles.y >= height - 130) {
    paddles.y = paddles.y - 20;
  }
}
