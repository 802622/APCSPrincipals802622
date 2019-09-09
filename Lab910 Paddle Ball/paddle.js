class Paddle{
    constructor(x,y){
      this.loc = createVector(x, y);
      //this.vel = createVector(dx, dy);
      this.clr = color(random(255),random(255),random(255));
    }
    run(){//use this so you dont have to run all of these for each ball
      this.checkEdges();
      this.render();
    }
    checkEdges(){//check if touching edge, if so reverse direction
      if(this.loc.x < 0){
        this.vel.x = -this.vel.x;//left
      }
      if(this.loc.x > width){//right
        this.vel.x = -this.vel.x;
      }
      if(this.loc.y < 0){//down
        this.vel.y = -this.vel.y;
      }
      if(this.loc.y > height){//up
        this.vel.y = -this.vel.y;
      }
    }
    render(){//render one frame
      fill(this.clr);
      rectMode(CENTER);
      rect(this.loc.x, mouseY, 10, 100);//render ball, change if you want other shapes
    }
  }
