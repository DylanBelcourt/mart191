

var things = [];
var num = 6;


function setup() {
    createCanvas(windowWidth, windowHeight);

    for (var i = 0; i < num; i++) {
        things.push( new Thing(
            random(width),
            random(height),
            100,
            50
        ));
    }
}

function draw() {

  background(145, 232, 143,60);
  fill(0);


    for (var i = 0; i < things.length; i++) {
        things[i].display();
        things[i].move();
        things[i].collisionCheck(things, i);
    }
}
