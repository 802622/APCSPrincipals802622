class Paddle{
    constructor(x,y){//find where to make paddle
      this.loc = createVector(x, y);//make paddle
      this.clr = color(255,0,0);//paddle color
    }//end the constructor
    run(){//use this so you dont have to run all of these for each ball
      fill(this.clr);//make random color
      rectMode(CENTER);//make it so the center moves
      var mouseLoc = createVector (mouseX, 500);
      //this.loc.x=mouseX;
      this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09); //lerp function gets paddle to follow mouse
      rect(this.loc.x, this.loc.y, 100, 10);//render paddle to mouse and over at 10
    }//end run function
}//end of paddle class