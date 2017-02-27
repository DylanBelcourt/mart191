
var col = {
  r:0,
  g:0,
  b:0,
  bk:0,
};
var tri = {
  x1:10,
  x2:40,
  y1:20,
  y2:80,
  z1:30,
  z2:40
};
function setup() {
  createCanvas(1280,800);
  var currFrameRate;
  currFrameRate = frameRate(40);
  background(0);

}

function draw() {
  noStroke();
  fill(col.r,col.g,col.b,1);
  triangle(tri.x1,tri.x2,tri.y1,tri.y2,tri.z1,tri.z2);


  tri.x1 = noise(0.1 * pow(2,8));
  tri.x2 = abs(tri.x2 + 20);
  tri.y1 = random(-50,1500);
  tri.y2 = noise(1500/100);
  tri.z1 = abs(tri.z1 % 0.1);
  tri.z2 = random(-50,1500);

  col.r = random(0,200);
  col.g = random(0,15);
  col.b = random(0,200);
  col.bk = random(0,0);
}
