class food{
    constructor(){
        this.loc = createVector((Math.floor(Math.random() * 30)*20),(Math.floor(Math.random() * 30)*20));
    }
run(){
    this.change();
    this.render();
}
change(){
    if(this.loc.x==snake.loc.x&&this.loc.y==snake.loc.y){
        this.loc = createVector((Math.floor(Math.random() * 30)*20),(Math.floor(Math.random() * 30)*20));
    }
}
render(){
    fill(255,0,0);//make random color
    rectMode(CENTER);//make it so the center moves
    rect(this.loc.x, this.loc.y, 20, 20);//render paddle to mouse and over at 10
}
}