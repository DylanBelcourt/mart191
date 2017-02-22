
var bk = 0;
var w = 255;
var fall1 = 0;
var fall2 = 0;
var fall3 = 0;
var fall4 = 0;
var fall5 = 0;


function setup() {
  createCanvas(600,600);
  background(220,220,220);
}


function draw() {
  var currFrameRate;
  currFrameRate = frameRate();
  background(0);

  var bgVal;


bgVal = map(mouseX, 0, 600, 0, 255);

background(bgVal);

  rect(mouseX,555,60,50);
  fill(w);
  stroke(0);
  strokeWeight(0);



  ellipse(150,fall1,30,30);
  ellipse(560,fall1,50,50);
    fall1 = fall1 + 1.2;
  ellipse(250,fall2,50,50);
  ellipse(30,fall2,40,40);
    fall2 = fall2 + 1.9;
  ellipse(460,fall3,30,30);
    fall3 = fall3 + 1.9;
  ellipse(100,fall4,30,30);
    fall4 = fall4 + 2.2;
  ellipse(390,fall4,30,30);
    fall4 = fall4 + 2;
  ellipse(350,fall5,30,30);
    fall5 = fall5 + 1;




}
