class Paddle{
    constructor(x,y){
      this.loc = createVector(x, y);
      //this.vel = createVector(dx, dy);
      this.clr = color(random(255),random(255),random(255));
    }
    run(){//use this so you dont have to run all of these for each ball
      //this.checkEdges();
      this.render();
    }
    render(){//render one frame
      fill(this.clr);
      rectMode(CENTER);
      rect(this.loc.x, mouseY, 10, 100);//render ball, change if you want other shapes
    }
  }
