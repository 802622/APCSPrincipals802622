
class Ball {
  constructor(x, y, dx, dy, id) {
    this.clr = color(random(255), random(255), random(255));
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.id = id;
    this.acc = createVector(0, .1);

    this.run = function () {
      this.checkEdges();
      this.update();
      this.render();
    }

    this.checkEdges = function () {
      if (this.loc.x < 0) {
        this.vel.x = -this.vel.x; //left
      }
      if (this.loc.x > width) { //right
        this.vel.x = -this.vel.x;
      }
      if (this.loc.y < 0) { //down
        this.vel.y = -this.vel.y;
      }
      if (this.loc.y > height) { //up
        this.vel.y = -this.vel.y;
      }
    }
    this.update = function () {
        this.vel.limit(2);
       this.loc.add(this.vel);
    }
    this.render = function () {
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);
  }
}
}
