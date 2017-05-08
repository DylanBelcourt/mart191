
function Shot(x,y,size){
  this.x = x;
  this.y = y;
  this.size = size;
  this.edge = this.size * 0.5;


}

Shot.prototype.display = function(){
  push();
    translate(this.x, this.y);
    ellipse(this.x,this.y,this.size);
  pop();

};
