var buttons = [];
var resetButt;
var react = [];
var click = [];
var bg = (0,0,0,6);
var off = off;

var stem = [];
var stemAudio = [];
var buttColor = ['#bafcf9','#70bfbb','#459692','#25706c','#0e4744','#013835'];
// var stemChords;
// var stemDrum;
var bg1;

function preload(){
  for (var i = 0; i < 5; i++) {
    stem.push(  );
  }
  stemAudio[0] = loadSound('codingChords_02.mp3');
  stemAudio[1] = loadSound('codingDrum_02.mp3');
  stemAudio[2] = loadSound('codingBell_02.mp3');
  stemAudio[3] = loadSound('codingMarimba_02.mp3');
  stemAudio[4] = loadSound('codingBass_02.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  bg1 = loadImage("backg.jpg",[6]);
  background(bg);
  push();
  textSize(100);
  fill(100);
  textFont("molleat");
  text("MY MUSIC VISUALIZER",200,(height - 5));

  pop();
  currFrameRate = frameRate(60);


  for (var i = 0; i < 5; i++) {
    buttons[i] = new Button(20,i*120,100,100,i,buttColor[i]);
  }
  resetButt = new Button(20,5*120,100,100,5,buttColor[5]);
  for (var b = 0; b < 5; b++) {
                        // x1,fill, y_offset
    react[b] = new React(120, buttColor[b], b*120+50, stemAudio[b]);
  }


}

function draw() {

  background(0,0,0,6);



  for (var b = 0; b < react.length; b++) {
    react[b].display();
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].try();
    buttons[i].draw();
    if(buttons[i].isPressed){
      react[i].move();
    } else {
      react[i].loopStop();
    }
    if (keyCode === UP_ARROW) {
      react[i].move();
      react[i].loopStop();
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


  function randcolor(){
    return color(random(255),random(255),random(255));
  }
