class Paddle{
    constructor(x,y){
      this.loc = createVector(x, y);//make paddle
      this.clr = color(random(255),random(255),random(255));//paddle color
    }
    run(){//use this so you dont have to run all of these for each ball
      fill(this.clr);//make random color
      rectMode(CENTER);//make it so the center moves
      rect(this.loc.x, mouseY, 10, 100);//render paddle to mouse and over at 10
    }
}
