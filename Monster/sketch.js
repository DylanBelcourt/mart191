function setup() {
  createCanvas(500, 700);
  background(150, 253, 242);

}

function draw() {
  push();
  stroke(150, 253, 242);
  fill(130, 233, 222);
  quad(0,0,500,0,500,400,0,400);
  pop();

  push();
  fill(240,25,100);
  stroke(0, 0, 0);
  strokeWeight(7);
  ellipse(250, 250, 200, 200);
  // eyes
  fill(255, 255, 255);
  stroke(0, 0, 0);
  ellipse(200, 230, 50, 50);

  fill(255, 255, 255);
  stroke(0, 0, 0);
  ellipse(290, 230, 50, 50);
  pop();
  // mouth
  push();
  translate(5, 60);
  stroke(0, 0, 0);
  strokeWeight(3);
  ellipse(290, 230, 20, 20);
  ellipse(260, 240, 20, 20);
  ellipse(230, 240, 20, 20);
  ellipse(200, 230, 20, 20);
  pop();
  // nose
  push();
  translate(190,190);
  fill(0,0,0);
  strokeCap(0, 0, 0);
  strokeWeight(4);
  triangle(40, 85, 58, 40, 76, 85);
  pop();
  // horns
  push();
  translate(130,100);
  strokeCap(0, 0, 0);
  strokeWeight(4);
  triangle(40, 85, 58, 40, 76, 59);
  pop();

  push();
  translate(250,100);
  strokeCap(0, 0, 0);
  strokeWeight(4);
  triangle(40, 55, 58, 40, 76, 79);
  pop();
  // eye X
  push();
  strokeWeight(3);
  translate(160, 170);
  line(20, 40, 60, 78);
  pop();

  push();
  strokeWeight(3);
  translate(160, 170);
  line(20, 80, 60, 40);
  pop();

  push();
  strokeWeight(3);
  translate(250, 170);
  line(20, 40, 60, 78);
  pop();

  push();
  strokeWeight(3);
  translate(250, 170);
  line(20, 80, 60, 40);
  pop();
  // portal
  push();
  translate(4,-10);

  push();
  fill(140, 0, 100);
  ellipse(248,575,300,50);
  pop();

  push();
  translate(0,4);
  fill(100, 0, 80);
  ellipse(248,575,280,40);
  pop();

  push();
  translate(0,8);
  fill(60, 0, 40);
  ellipse(248,575,260,30);
  pop();

  push();
  translate(0,13);
  fill(40, 0,20);
  ellipse(248,575,240,20);
  pop();

  push();
  translate(0,16);
  fill(0, 0,0);
  ellipse(248,575,220,10);
  pop();

  pop();

  // body
  push();
  translate(183, 270);
  fill(240,25,100);
  stroke(0, 0, 0);
  strokeWeight(7);
  triangle(0, 85, 65, 280, 130, 85);
  pop();

  // shoulder
  push();
  translate(120, 260);
  stroke(0, 0, 0);
  strokeWeight(4);
  triangle(0, 85, 65, 140, 90, 85);
  pop();

  push();
  translate(290, 260);
  stroke(0, 0, 0);
  strokeWeight(4);
  triangle(0, 85, 25, 140, 90, 85);
  pop();

  // arms
  push();
  translate(90,360);
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(240,25,100);
  quad(47, 1, 86, 35, 65, 80, 20, 76);
  pop();

  push();
  translate(90,360);
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(255,255,255);
  quad(55, 16, 85, 45, 65, 80, 30, 76);
  pop();

  push();
  translate(290,360);
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(240,25,100);
  quad(37, 31, 76, 0, 100, 80, 55, 76);
  pop();

  push();
  translate(290,360);
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(255,255,255);
  quad(37, 39, 69, 13, 92, 80, 55, 76);
  pop();

  push();
  translate(90,430);
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(240,25,100);
  quad(19, 8, 66, 12, 65, 80, 30, 76);
  pop();

  push();
  translate(90,430);
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(255,255,255);
  quad(30, 24, 66, 25, 65, 80, 37, 76);
  pop();

  push();
  translate(325,430);
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(240,25,100);
  quad(19, 8, 66, 12, 55, 80, 20, 76);
  pop();

  push();
  translate(325,430);
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(255,255,255);
  quad(19, 22, 56, 25, 48, 80, 20, 76);
  pop();

  // hands
    // left
  push();
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(240,25,100);
  ellipse(140,520,50,50);
  pop();

  push();
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(240,25,100);
  ellipse(150,515,20,20);
  pop();
    // right
  push();
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(240,25,100);
  ellipse(360,520,50,50);
  pop();

  push();
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(240,25,100);
  ellipse(350,515,20,20);
  pop();
  // text
  push();
  textAlign(CENTER);
  textSize(70);
  textFont("BlowBrush");
  text("DYLAN'S", 250, 97);
  pop();

  push();
  textAlign(CENTER);
  textSize(67);
  fill(240,25,100);
  textFont("BlowBrush");
  text("DYLAN'S", 250, 97);
  pop();

  push();
  textAlign(CENTER);
  textSize(70);
  textFont("BlowBrush");
  text("MONSTER", 250, 670);
  pop();

  push();
  textAlign(CENTER);
  textSize(67);
  fill(240,25,100);
  textFont("BlowBrush");
  text("MONSTER", 250, 670);
  pop();

  push();
  fill(255, 255, 255);
  triangle(210,380,248,500,290,380);
  pop();
}
