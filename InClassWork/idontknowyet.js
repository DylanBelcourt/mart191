// function Asteroid(init_x, init_y) {
//     this.pos = {
//         x: init_x,
//         y: init_y
//     };
//     this.rot = random(0, 360);
//     this.vel = {
//         x: random(0.5, 3),
//         y: random(0.5, 3)
//     };
//     this.rad = 25;
// }
//
// Asteroid.prototype.display = function() {
//     push();
//     noStroke();
//     translate(this.pos.x, this.pos.y);
//     angleMode(degrees);
//     rotate(this.rot);
//     fill(115, 107, 99);
//     ellipse(0, 0, 50, 50);
//     fill(29, 29, 29);
//     ellipse(12, 5, 50 / 2, 50 / 2);
//     ellipse(-10, -3, 20, 15);
//     ellipse(-12, 8, 12, 14);
//     pop();
// };
//
//
// Asteroid.prototype.move = function() {
//
//     this.pos.x += this.vel.x;
//     this.pos.y += this.vel.y;
//
//     if (this.pos.x >= width) {
//
//         this.vel.x *= -1;
//         console.log("BOUNCE");
//
//     } else if (this.pos.x <= 0) {
//
//         this.vel.x *= -1;
//         console.log("BOUNCE");
//     }
//     if (this.pos.y >= height) {
//
//         this.vel.y *= -1;
//         console.log("BOUNCE");
//
//     } else if (this.pos.y <= 0) {
//
//         this.vel.y *= -1;
//         console.log("BOUNCE");
//
//     }
// };
//
// Asteroid.prototype.collisionCheck = function(asteroidsArr, myIdx) {
//     var maxDist, distance, otherAsteroid;
//
//
//     for (var i = 0; i < asteroidsArr.length; i++) {
//
//         var collision = false;
//
//         otherAsteroid = asteroidsArr[i];
//
//         if (i !== myIdx) {
//             distance = dist(this.pos.x, this.pos.y, otherAsteroid.pos.x, otherAsteroid.pos.y);
//             maxDist = this.rad + otherAsteroid.rad;
//
//             if (distance <= maxDist) {
//                 collision = true;
//             }
//
//             if (collision) {
//                 this.vel.x *= -1;
//                 this.vel.y *= -1;
//             }
//
//         }
//
//     }
// };
