var buttons = [];
var resetButt;
var react = [];
var click = [];
var bg = (0,0,0);
var off = off;

var stem = [];
// var song;


function preload(){
  for (var i = 0; i < 5; i++) {
    stem.push(  );
  }
  mySound = loadSound('/codingChords.mp3');
  mySound = loadSound('/codingChords.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
  currFrameRate = frameRate(60);


  for (var i = 0; i < 5; i++) {
    buttons[i] = new Button(20,i*120,100,100,i);
  }
  resetButt = new Button(20,5*120,100,100,5);
  for (var b = 0; b < 5; b++) {
                        // x1,fill, y_offset
    react[b] = new React(120, '#cecece', b*120);
  }


}

function draw() {
  background(0,0,0,15);
  for (var b = 0; b < react.length; b++) {
    react[b].display();
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].try();
    buttons[i].draw();
    if(buttons[i].isPressed){
      react[i].move();
    }
  }

  resetButt.try();
  resetButt.draw();


}


function mousePressed(){
  var isPressed;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].check();

  }

  isPressed = resetButt.check();
  if(resetButt.isPressed){
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].reset();
    }
    for (var i = 0; i < react.length; i++) {
      react[i].reset();
    }
    resetButt.isPressed = false;
  }

  }
