
var x = 300;
var y = 200;
var d = 150;
var state = false;

var tri = {
  x1:5,
  x2:40,
  y1:20,
  y2:0,
  z1:35,
  z2:40
};

var col = {
  r:0,
  g:0,
  b:0,
};

var ball = {
  x:10,
  y:10,
  dx:7,
  dy:5,

};

function setup() {
  createCanvas(1280, 800);
  var currFrameRate;
  currFrameRate = frameRate(60);
  background(0);

}

function draw() {

  if (state) {
    background(col.r,col.g,col.b,1000);
    col.r = random(0,255);
    col.g = random(0,255);
    col.b = random(0,255);

    noStroke();
    fill(col.r,col.g,col.b);
    triangle(tri.x1,tri.x2,tri.y1,tri.y2,tri.z1,tri.z2);


    tri.x1 = random(-50,1500);
    tri.x2 = random(-50,1500);
    tri.y1 = random(-50,1500);
    tri.y2 = random(-50,1500);
    tri.z1 = random(-50,1500);
    tri.z2 = random(-50,1500);

    ellipse(ball.x,ball.y,ball.dx,ball.dy);

    ball.x = random(-50,1500);
    ball.y = random(-50,1500);
    ball.dx = random(-50,1500);
    ball.dy = random(-50,1500);

  } else {
    background(255);
  }

  push();
  noStroke();
  fill(0,0,0,50);
  ellipse(295,205,150,150);
  pop();


  push();
  noStroke();
  fill(255,0,0);
  ellipse(x,y,d,d);
  pop();


  textSize(30);
  fill(0);
  textFont("HammersmithOne");
  text("PUSH",260, 210);




}

function mousePressed() {
  if (dist(mouseX, mouseY, x, y) < d/2) {
    state = !state;
  }
}
