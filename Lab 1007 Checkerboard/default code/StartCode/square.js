class squares{
    constructor(x,y,cl){//find where to make paddle
      this.loc = createVector(x, y);//make paddle
      if(cl == 1){
      this.clr = color(255,192,203);//pink
      }
      if(cl == 2){
        this.clr = color(0,128,0);//green
        }
    }//end the constructor
    render(){//use this so you dont have to run all of these for each ball
      fill(this.clr);//make random color
      rect(this.loc.x, this.loc.y, 100, 10);//render paddle to mouse and over at 10
    }//end run function
}//end of paddle class