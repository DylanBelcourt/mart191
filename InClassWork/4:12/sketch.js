var whiteButtons = [];
var react = [];
var bg = (0,0,0);
var off = off;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
  currFrameRate = frameRate(60);

  for (var i = 0; i < 6; i++) {
    whiteButtons[i] = new Button(20,i*120,100,100,i);
  }
  for (var b = 0; b < 2; b++) {
    react[b] = new React(150,b*125,150,75);
  }
}

function draw() {
  background(0,0,0,5);
  for (var i = 0; i < whiteButtons.length; i++) {
    whiteButtons[i].draw();
    if(whiteButtons[0].isPressed){
      react[0].move();
      background(22,22,22,5);
    }
    if(whiteButtons[1].isPressed){
      react[1].move();
    }
  }
  for (var b = 0; b < react.length; b++) {
    react[b].display();
  }
}
function mousePressed(){
  var isPressed;
  for (var i = 0; i < whiteButtons.length; i++) {
    isPressed = whiteButtons[i].check();
  if (isPressed){
    if(i===0){
      bg=(255,50,50);
    }
    if(i===1)
      bg=(25,255,25);
    }
    if(i===2){
      bg='#f3f3f3';
    }
    if(i===3){
      bg='#808080';
    }
    if(i===4){
      bg='#800000';
    }
    if(i===5){
      bg='#000000';
    }
  }

  }
