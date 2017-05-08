function Enemy(){
  this.x = random(10,width);
  this.y = random(-10,-70);
  this.size = 50;
  this.edge = size * 0.5;
  this.xSpeed = random(0.1, 1);
}

Enemy.prototype.draw = function(){
  push();
    translate(this.x, this.y);
    fill(255,0,0);
    ellipse(0,0,this.size,this.size);
  pop();

};

Enemy.prototype.move = function(){
  this.y = this.y + this.xSpeed;
  if (this.y >= height) {
    this.y = random(-10,-30);
    this.x = random(5,width);
  }

};
