
function Button(x,y,w,h,id,color){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.isPressed = false;
  this.id = id;
  this.color = color;
}

Button.prototype.draw = function(){

  push();
  translate(this.x, this.y);
  fill(this.color);
  // fill(55,200,165);
  rect(0, 0,this.w,this.h);
  pop();
  // push();
  //   rect(25,5,90,90);
  // pop();
  // push();
  //   fill(this.color);
  //   rect(25,125,90,90);
  // pop();
  // push();
  //   fill(this.color);
  //   rect(25,245,90,90);
  // pop();
  // push();
  //   fill(this.color);
  //   rect(25,365,90,90);
  // pop();
  // push();
  //   fill(this.color);
  //   rect(25,485,90,90);
  // pop();
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


Button.prototype.try = function(){
  if(
    mouseX >= this.x &&
    mouseX <= this.x + this.w &&
    mouseY >= this.y &&
    mouseY <= this.y + this.h
  ){
    if(mouseIsPressed){
      this.color = color(82, 168, 175);

    } else {
      this.color = color(160, 247, 255);
    }
  }else{
    this.color = color(0,255,255);
  }
};

Button.prototype.reset = function() {
  this.color = color(0,255,255);
  this.isPressed = false;
};
