
var cones = [];
var fall = 3;
var bg = (117, 252, 255);



function setup(){
  createCanvas(windowWidth, windowHeight);
  background(bg);
  for (var i = 0; i < 7; i++) {
    cones.push( new Icecream((i + 1) * 150, 100));
  }
}

function draw() {
  background(bg, 15);


  for (var i = 0; i < cones.length; i++) {
    cones[i].display();
    cones[i].move();



    }

}
