class bar{//to make new bars easy to add more 
    constructor(size,locX,id){
        this.height =size;
        this.xl = locX;
        this.id = id;
    }

    run(){
        // this.x = ((50*this.id));

        this.xy = (this.id*50);

        fill(255,0,0);//make red
        rectMode(CENTER);
        fill(40*this.id,0,255);
        rect(this.xy, 500, 40, 600);
    }
    }