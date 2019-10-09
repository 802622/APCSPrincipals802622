class square{
  constructor(x,y,cl){//find where to make square and color
    this.loc = createVector(x, y);
    if(cl == 1){
    this.clr = color(255,192,203);//pink
    }
    if(cl == 2){
      this.clr = color(0,128,0);//green
    }
  }//end the constructor
  render(){//use this so you dont have to run all of these seperatly
    fill(this.clr);//make board color
    rect(this.loc.x, this.loc.y, 100, 100);//render square to location with size 100 100
  }//end run function
}//end of square class
