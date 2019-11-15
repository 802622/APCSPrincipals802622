//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  frameRate(8);

  food = new food();
  snake = new snake();

}


var sege = [];
//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5);
snake.run();
 food.run();
sneke();

}

function sneke(){
  for(var x=1;x<snake.last.length;x++){
    var z = snake.seg;
    fill(255,100,0);//make random color
    //if(this.seg>1){
    for(var i=1;i<(snake.seg);i++){
      //this value needs to be number of snake ovments(snake.last.length)- 1 for the first, 2 for the secon and so on
  

      //try iterating back to front



      //sege[i]= new snek(snake.last[(snake.last.length-sege.length)-i].x,snake.last[(snake.last.length-sege.length)-i].y);
      sege[i] = new snek(snake.last[((snake.last.length-sege.length)-i)].x,snake.last[((snake.last.length-sege.length)-i)].y);
    }
}

for(var x=1;x<sege.length;x++){
  console.log("run: "+x)
  sege[x].run();                    //run this once sege works
  }
}

