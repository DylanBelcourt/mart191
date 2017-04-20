var button1 = {
  x : 0,
  y : 600,
  w : 50,
  h : 100,
};
var button2 = {
  x : 50,
  y : 600,
  w : 50,
  h : 100,
};
var button3 = {
  x : 100,
  y : 600,
  w : 50,
  h : 100,
};
var button4 = {
  x : 138,
  y : 600,
  w : 25,
  h : 75,
};
var button5 = {
  x : 150,
  y : 600,
  w : 50,
  h : 100,
};
var button6 = {
  x : 88,
  y : 600,
  w : 25,
  h : 75,
};

var key = false;
// var button = false;
// var not = false;

var col = {
  r : 0,
  g : 0,
  b : 0
};
var currFrameRate;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  currFrameRate = frameRate(1);

}



function draw() {
  background(0);

  if (key) {
    currFrameRate = frameRate(20);
    background(col.r, col.g,col.b);
      col.r = random(0,255);
      col.g = random(0,0);
      col.b = random(0,0);
  }
  
  //
  // if (button) {
  //   currFrameRate = frameRate(1);
  //   background(col.r, col.g,col.b);
  //     col.r = random(0,0);
  //     col.g = random(0,255);
  //     col.b = random(0,255);
  // }
  //
  // if (not) {
  //   currFrameRate = frameRate(3);
  //   background(col.r, col.g,col.b);
  //     col.r = random(0,0);
  //     col.g = random(0,0);
  //     col.b = random(0,255);
  // }

  // push();
  // rect(button2.x,button2.y,button2.w,button2.h);
  // pop();
  // push();
  // rect(button3.x,button3.y,button3.w,button3.h);
  // pop();
  //
  // push();
  // rect(button5.x,button5.y,button5.w,button5.h);
  // pop();
  //
  // push();
  // fill(100,100,100);
  // rect(button4.x,button4.y,button4.w,button4.h);
  // pop();
  //
  // push();
  // fill(100,100,100);
  // rect(button6.x,button6.y,button6.w,button6.h);
  // pop();

}

function mousePressed(){

  if(
    mouseX >= button1.x &&
    mouseX <= button1.x + button1.w &&
    mouseY >= button1.y &&
    mouseY <= button1.y + button1.y + button1.h
  ){
    console.log("button 1 pressed");
    key = !key;
  }
  //
  // if (dist(mouseX,mouseY, button2.x, button2.y,button2.w,button2.h)){
  //   button = !button;
  // }
  //
  // if (dist(mouseX,mouseY, button3.x, button3.y, button3.w,button3.h)){
  //   not = !not;
  // }
}
