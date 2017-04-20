function Thing(x,y,size){
  this.x = x;
  this.y = y;
  this.size = size;
}

Thing.prototype.show = function(){
  push();
    fill(255);
    ellipse(this.x,this.y,this.size,this.size);
  pop();


};


}
