class Planet {
  constructor(x, y, dx, dy, id) {
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
        this.vel.x = -this.vel.x*random()*3; //left
      }
      if (this.loc.x > width) { //right
        this.vel.x = -this.vel.x*random()*2;
      }
      if (this.loc.y < 0) { //down
        this.vel.y = -this.vel.y*random()*2;
      }
      if (this.loc.y > height) { //up
        this.vel.y = -this.vel.y*random()*2;
      }

      var dist = this.loc.dist(ships[0].loc);
      if(dist < 80){
        this.loc.x = Math.floor((Math.random() * 700) + 50);
        this.loc.y = Math.floor((Math.random() * 700) + 50);
      }
    }
    this.update = function () {
        this.vel.limit(2);
       this.loc.add(this.vel);
    }
    this.render = function () {
    var r = ((AccSlider.value())*2.55);
    this.clr = color(r,0,0);
    fill(this.clr);
    var size = maxSlider.value();
    ellipse(this.loc.x, this.loc.y, size+20, size+20);
  }
}
}
