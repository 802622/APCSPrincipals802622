class snek{//to make new bars easy to add more 
    constructor(locX,locY){
        this.loc = createVector(locX, locY);
    }

    run(){
        fill(255,0,0);//make red
        fill(0,100,255);
        rect(this.loc.x,this.loc.y,20,20);
        console.log(this.loc);
    }
    }