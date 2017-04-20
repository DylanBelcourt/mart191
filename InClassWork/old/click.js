
function Button(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

}

Button.prototype.draw = function(){

  push();
  rect(this.x,this.y,this.w,this.h);
  pop();
};
