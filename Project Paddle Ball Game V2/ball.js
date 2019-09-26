class Ball{//to make new balls easy to add more 
    constructor(x,y,dx,dy,id){ //constructor to start things off and make ball
      this.loc = createVector(x, y);//create a vector for ball's position
      this.vel = createVector(dx, dy);//create a vector for movment for the ball
      this.acc = createVector (0, 0.2);
      this.clr = color(random(255),random(255),random(255));//create random color for the ball
      this.id = id;
    }
    run(){//use this so you dont have to run all of these for each ball
      this.checkEdges();//bounce ball
      this.update();//move ball
      this.render();//draw ball
      this.remove();//check if the ball hit the paddle
    }//end run
    checkEdges(){//check if touching edge, if so reverse direction
      if(this.loc.x < 0){//left
        this.vel.x = -this.vel.x;//bounce ball
      }
      if(this.loc.x > width){//right
        this.vel.x = -this.vel.x;//bounce ball
      }
      if(this.loc.y < 0){//down
        this.vel.y = -this.vel.y;//bounce ball
      }
      if(this.loc.y > height){//up
        this.vel.y = -this.vel.y;//bounce ball
        console.log("bottom");
      }
    }
    remove(){
      for (var i = balls.length-1; i >= 0; i--){
        if (balls[i].isColliding()){
          balls.splice(i, 1);
          if(this.vel.y<1){
            mode = "lose";
          }
        }
      }
    }
      isColliding(){
        if(this.loc.x > paddle.loc.x-50 &&
        this.loc.x < paddle.loc.x +50 &&
        this.loc.y+ 15 > paddle.loc.y &&
        this.loc.y-10 < paddle.loc.y){
          return true;
      }
    }
    update(){//update location
      this.vel.add(this.acc);//gravitay
      this.loc.add(this.vel);//move things
    }
    render(){//render one frame
      fill(this.clr);//make this color
      ellipse(this.loc.x, this.loc.y, 10, 10);//render ball, change if you want other shapes
      background(5,5,5,25);//give slight trail
    }
  }