class Ball{//to make new balls easy to add more 
    constructor(x,y,r){ //constructor to start things off and make ball
      this.loc = createVector(x, y);//create a vector for ball's position//create a vector for movment for the ball
      this.clr = r
    }
    run(){//use this so you dont have to run all of these for each ball
      this.render();//draw ball
    }//end run
    render(){//render one frame
      fill(200+this.clr*2,0,0);//make this color
      ellipse(this.loc.x, 300, 20, 20);//render ball, change if you want other shapes
      background(5,5,255,25);//give slight trail
    }
  }