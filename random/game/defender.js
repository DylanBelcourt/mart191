function Defender(){
  this.x = 300;
  this.y = 500;
  this.angle = 4.7;
  this.gunLenth = 50;
  this.size = 50;
  this.bullsize = 5;
  this.bully = 500;
  this.bullx = 300;
  this.state = false;

}

Defender.prototype.draw = function(){
  push();
    ellipse(this.x, this.y, this.size, this.size);
  pop();

};
Defender.prototype.move = function(){
  if (keyIsDown(LEFT_ARROW)){
    this.x = this.x - 3;
  }else if (keyIsDown(RIGHT_ARROW)) {
    this.x = this.x + 3;
  }
  // if (keyIsDown(UP_ARROW)) {
  //   this.y = this.y - 3;
  // }else if (keyIsDown(DOWN_ARROW)) {
  //   this.y = this.y + 3;
  // }
};
Defender.prototype.ammo = function(){

  push();
    fill(255,255,255);
    noStroke();
    ellipse(this.x,this.bully,this.bullsize,this.bullsize);
   pop();
   push();
   if (keyIsPressed === UP_ARROW) {
     this.bully = this.bully-5;
     this.x = this.x;
   }
   pop();
};
