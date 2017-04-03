
function Icecream(init_x, init_y){
  this.x = init_x;
  this.y = init_y;


}

Icecream.prototype.display = function(){

  push();
  translate(this.x, this.y);
  push();
  fill(255, 137, 137);
  arc(0, 0, 100, 100, -500, -100, CHORD);
  pop();

  push();
  translate(0,60);
  fill(244, 223, 161);
  triangle(-50, -50, 0, 150, 50, -50);
  pop();

  push();
  fill(255, 137, 137);
  arc(40,0,50,30,-500,-100,CHORD);
  arc(-40,0,50,30,-500,-100,CHORD);
  arc(0,0,50,30,-500,-100,CHORD);
  pop();

  push();
  line(-50,10,40,50);
  line(-40,50,30,85);
  line(-30,90,21,120);
  line(-20,130,15,150);
  pop();

  pop();
};

Icecream.prototype.move = function(){
this.x = this.x + fall;
this.y = this.y + fall;

};
Icecream.prototype.move = function(){



  if (this.y < 0) {
    fall = fall + 1;
  }

  if(this.y > height){
    fall = fall + -1;
  }

this.y = this.y + fall;
};
