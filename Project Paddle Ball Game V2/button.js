class button{
    constructor(x,y,text,id){//find where to make paddle
    if(id == 1){
      this.clr = color(255,0,0);//paddle color
    }else if(id == 2){
        this.clr = color(0,255,0);//paddle color
    }else if(id == 0){
        this.clr = color(255,255,0);//paddle color
      }else{
        this.clr = color(0,0,255);//paddle color
      }
    
      this.id=id;
      this.loc = createVector(x, y);//make paddle

      this.text = text;
    }//end the constructor
    run(){//use this so you dont have to run all of these
      rectMode(CORNER);
      fill(this.clr);//make color
      if(this.id>0){
      rect(this.loc.x, this.loc.y, 110, 50);//render paddle to mouse and over at 10
      }
      if(this.id==0){//if it is the restart button
        rect(this.loc.x, this.loc.y, 150, 50);
      }
      textSize(30);//make text fit
      fill(255,255,255);//make text color
      text(this.text, this.loc.x, this.loc.y+40);//write you win
    }//end run function
}//end of paddle class