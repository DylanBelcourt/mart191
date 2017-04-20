function Thing(x, y, size, color){
    this.x = x;
    this.y = y;
    this.vel = { x: 1, y: 1 };
    this.size = size;
    this.rad = this.size * 0.5;
    this.color = color;
}

Thing.prototype.display = function () {
    push();
      translate(this.x,this.y);
    push();
      noStroke();
      fill(191, 177, 126);
      ellipse(0,0,100,100);
    pop();
    push();
      ellipse(10,10,15,10);
      ellipse(-15,0,9,13);
      ellipse(-10,30,10,15);
      ellipse(-30,-20,10,15);
      ellipse(35,-20,10,10);
      ellipse(15,-10,10,10);
    pop();
    push();

      fill(100,100,100,20);
      quad(-60,-15,60,-15,40,150,-40,150);
    pop();
    push();
      noStroke();
      fill(255);
      quad(-55,0,55,0,40,150,-40,150);
    pop();

    pop();
};

Thing.prototype.move = function(){


    this.x += this.vel.x;
    this.y += this.vel.y * 3;


    if (this.x >= width) {
        this.x = width - this.vel.x;
        this.vel.x *= -1;
    } else if (this.x <= 0) {
        this.x = 1 + this.vel.x;
        this.vel.x *= -1;
    }

    if (this.y >= height) {
        this.y = height - this.vel.y;
        this.vel.y *= -1;
    } else if (this.y <= 0) {
        this.y = 1 + this.vel.y;
        this.vel.y *= -1;
    }
};


Thing.prototype.collisionCheck = function(hit, check){
    var maxDist, distance, otherBug;


    for (var i = 0; i < hit.length; i++) {

        var collision = false;

        otherBug = hit[i];

        if (i !== check) {
            distance = dist(this.x, this.y, otherBug.x, otherBug.y);
            maxDist = this.rad + otherBug.rad;

            if (distance <= maxDist) {
                collision = true;
            }

            if (collision) {
                this.vel.x *= -1;
                this.vel.y *= -1;
            }

        }

    }
};
