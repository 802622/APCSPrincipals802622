class Ball{
  constructor(x,y,dx,dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(random(255),random(255),random(255))
  }
  run(){//use this so you dont have to run all of these for each ball
    this.checkEdges();
    this.update();
    this.render();
  }
  checkEdges(){//check if touching edge, if so reverse direction
    if(this.loc.x < 0){
      this.loc.x = -this.loc.x;
    }
    if(this.loc.x > width){
      this.loc.x = -this.loc.x;
    }
    if(this.loc.y < 0){
      this.vel.dy = -this.vel.dy;
    }
    if(this.loc.y > height){
      this.vel.dy = -this.vel.dy;
    }
  }
  update(){//update location
    this.loc.add(this.vel)
  }
  render(){//render one frame
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 30, 30);
  }
}
