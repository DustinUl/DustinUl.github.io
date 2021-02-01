Score = [0, 0];
let r = 200;

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
