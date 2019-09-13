var p = 0;//because non global varriables are hard
var t = (prompt("What do ypu want to play to?", 2))-1;//win condition user entered for testing
class Ball{//to make new balls easy to add more 
    constructor(x,y,dx,dy){ //constructor to start things off and make ball
      this.loc = createVector(x, y);//create a vector for ball's position
      this.vel = createVector(dx, dy);//create a vector for movment for the ball
      this.clr = color(random(255),random(255),random(255));//create random color for the ball
    }
    run(){//use this so you dont have to run all of these for each ball
      this.checkEdges();//bounce ball
      this.update();//move ball
      this.render();//drqw ball
      this.paddle();//check if the ball hit the paddle
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
      }
    }
    paddle(){
      var d = mouseY;
        if((this.loc.y>=(d-50)&&(d+50)>=this.loc.y)&&this.loc.x < 31){//detect paddle hit
        p++;//incriment score
        textSize(200);//large score
        fill(255, 255, 255);//make score text white
        text(p, 400, 400);//write score
        this.vel.x = -this.vel.x;//bounce ball
      }
    }
    update(){//update location
      this.loc.add(this.vel);//move things
    }
    win(){//check for win
      if(p>t){//set win condition
        background(5,5,255);//wipe background make blue
        var w = "You Win!";//win string
        textSize(80);//make text fit
        fill(255, 255, 255);//make win white
        text(w, 220, 400);//write you win
        throw new Error("won");//stop game
      }
    }
    render(){//render one frame
      fill(this.clr);//make this color
      ellipse(this.loc.x, this.loc.y, 10, 10);//render ball, change if you want other shapes
      background(5,5,5,25);//give slight trail
    }
  }