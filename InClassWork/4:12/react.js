function preload(){
  mySound = loadSound('/codingChords.mp3');
}

function React(x1,fill, y_offset){
  this.x1 = x1;
  this.y1 = 0;
  this.y2 = 0;
  this.isPressed = false;
  this.fill = fill;
  this.y_offset = y_offset;
}

React.prototype.display = function(){

  push();
    strokeWeight(2);
    stroke(this.fill);
    // stroke(25,240,20);
    fill(this.fill);
    translate(0, this.y_offset);
    line(this.x1,this.y1,this.x1,this.y2);
  pop();

};

React.prototype.move = function(){
  this.x1 = this.x1 +5;
  this.y1 = random(0,50);
  this.y2 = random(50,100);
  if (this.x1>=windowWidth) {
    this.x1 = 150;
  }
};

React.prototype.so = function(){

};

React.prototype.reset = function(){
  this.x1 = 120;
  this.isPressed = false;
};
