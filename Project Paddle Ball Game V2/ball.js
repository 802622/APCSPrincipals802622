var p = 0;//because non global varriables are hard
var t = 9;//(prompt("What do ypu want to play to?", 2))-1;//win condition user entered for testing

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
      this.win();//check win condition
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
      // var d = mouseX;//location of paddle x
      // var l = balls.length-1;
      // for(var j = l - 1; j >= 0; j--){//balls.length
      //   if(balls[j].isColliding()) balls.splice(j,1);
      // }
      //console.log("collison" + balls.length);
      for (var i = balls.length-1; i >= 0; i--){
        if (balls[i].isColliding()){
          balls.splice(i, 1);
          console.log("ball remove"+i);
        }
      }
    }
      isColliding(){
        if(this.loc.x > paddle.loc.x-50 &&
        this.loc.x < paddle.loc.x +50 &&
        this.loc.y+ 15 > paddle.loc.y &&
        this.loc.y-10 < paddle.loc.y){
          console.log("collision");
          return true;
          //this.vel.y = -this.vel.y;
          //score=score+1;
      }
    }
    update(){//update location
      this.vel.add(this.acc);//gravitay
      this.loc.add(this.vel);//move things
    }
    win(){//check for win
      if(p>t){//set win condition
        background(5,5,255);//wipe background make blue
        var w = "You Win!";//win string
        textSize(80);//make text fit
        fill(255, 255, 255);//make win white
        text(w, 150, 300);//write you win
        throw new Error("won");//stop game
      }
    }
    render(){//render one frame
      // fill(255,0,0);//make this color
      // textSize(10);//make text fit
      // text(h, this.loc.x, this.loc.y);//write you win
      fill(this.clr);//make this color
      ellipse(this.loc.x, this.loc.y, 10, 10);//render ball, change if you want other shapes
      background(5,5,5,25);//give slight trail
    }
    // isColiding(){
    //   var d = mouseX;
    //   (this.loc.x>=(d-50)&&(d+50)>=this.loc.x)&&((this.loc.y > 490)&&(this.loc.y<510))
    //   return true;
    // }
  }