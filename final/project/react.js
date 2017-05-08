
function React(x1,fill, y_offset, stemAudio){
  this.x1 = x1;
  this.y1 = 0;
  this.y2 = 0;
  this.isPressed = false;
  this.fill = fill;
  this.y_offset = y_offset;
  this.stem = stemAudio;
  this.audioOn = false;
  this.amp = new p5.Amplitude();
  this.amp.setInput(this.stem);
  this.increment = (width-this.x1)/(60*8);
  this.size = 1;
}

React.prototype.display = function(){

  push();
    strokeWeight(5);
    stroke(this.fill);
    // stroke(25,240,20);
    fill(this.fill);
    translate(0, this.y_offset);
    line(this.x1,this.y1,this.x1,this.y2);
  pop();

};

React.prototype.move = function(){
  var level = this.amp.getLevel();
  this.size = map(level, 0, 1, 0, 110);
  this.x1 = this.x1 + this.increment;
  this.y1 = -this.size;
  this.y2 = this.size;
  if (this.x1>=width) {
    this.x1 = 110;
  }
  this.loop();

};

React.prototype.loop = function(){
  if (!this.audioOn) {
    this.stem.loop();
  }
  this.audioOn = true;
};

React.prototype.loopStop = function(){
  if (this.audioOn) {
    this.stem.stop();
  }
  this.audioOn = false;
};




React.prototype.so = function(){

};

React.prototype.reset = function(){
  this.x1 = 120;
  this.isPressed = false;
  this.y1 = this.y2 = 0;
};
