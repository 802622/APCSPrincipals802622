class Paddle{
    constructor(x,y){//find where to make paddle
      this.loc = createVector(x, y);//make paddle
      this.clr = color(random(255),random(255),random(255));//paddle color
    }//end the constructor
    run(){//use this so you dont have to run all of these for each ball
      fill(this.clr);//make random color
      rectMode(CENTER);//make it so the center moves
      rect(this.loc.x, mouseY, 10, 100);//render paddle to mouse and over at 10
    }//end run function
}//end the class
