
function Button(x,y,w,h,id){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.isPressed = false;
  this.id = id;
}

Button.prototype.draw = function(){

  push();
  rect(this.x,this.y,this.w,this.h);
  pop();
};

Button.prototype.check = function(){
  if(
    mouseX >= this.x &&
    mouseX <= this.x + this.w &&
    mouseY >= this.y &&
    mouseY <= this.y + this.h
  ){
    console.log("button " + this.id + " pressed");
    this.isPressed = !this.isPressed;
    return true;
  }else{
    return false;
  }

};
