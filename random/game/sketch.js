
var enemy = [];
var defender  = [];

function setup() {
createCanvas(600,600);

  for (var i = 0; i < 20; i++) {
    enemy[i] = new Enemy();
  }
  for (var i = 0; i < 20; i++) {
    defender[i] = new Defender();
  }

}

function draw() {
background(100,100,100);
for (var i = 0; i < defender.length; i++) {
  defender[i].draw();
  defender[i].move();
  defender[i].ammo();
}
for (var i = 0; i < enemy.length; i++) {
  enemy[i].draw();
  enemy[i].move();

}


}
