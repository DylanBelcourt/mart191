
var cones = [];
var fall = 3;




function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (var i = 0; i < 8; i++) {
    cones.push( new Icecream((i + 1) * 150, 100));
  }
}

function draw() {
  background(0, 0, 0, 15);


  for (var i = 0; i < cones.length; i++) {
    cones[i].display();
    cones[i].move();



    }

}
