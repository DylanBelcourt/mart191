function React(x1,y1,x2,y2){
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.isPressed = false;
}

React.prototype.display = function(){

  push();
    strokeWeight(5);
    stroke(25,240,20);
    fill(255,255,255);
    line(this.x1,this.y1,this.x2,this.y2);
  pop();

};

React.prototype.move = function(){
  this.x1 = this.x1 +1;
  this.x2 = this.x2 +1;
  this.y1 = random(25,50);
  this.y2 = random(50,75);
  if (this.x1>=windowWidth) {
    this.x1 = 150;
    this.x2 = 150;

  }


};
