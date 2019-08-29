class Ball{
    constructor(x,y,dx,dy){
      this.loc = createVector(x, y);
      this.vel = createVector(dx, dy);
      this.acc = createVector (0, 0.2);
      this.clr = color(random(255),random(255),random(255));
    }
    run(){//use this so you dont have to run all of these for each ball
      this.checkEdges();
      this.update();
      this.render();
    }
    checkEdges(){//check if touching edge, if so reverse direction
      if(this.loc.x < 0){
        this.vel.x = -this.vel.x;
      }
      if(this.loc.x > width){
        this.vel.x = -this.vel.x;
      }
      if(this.loc.y < 0){
        this.vel.y = -this.vel.y;
      }
      if(this.loc.y > height){
        this.vel.y = -this.vel.y;
      }
    }
    update(){//update location
      this.vel.add(this.acc);
      this.loc.add(this.vel)
    }
    render(){//render one frame
      fill(this.clr);
      ellipse(this.loc.x, this.loc.y, 10, 10);
    }
  }