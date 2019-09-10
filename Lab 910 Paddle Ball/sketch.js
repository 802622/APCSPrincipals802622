//  Nayan Smuek
// 	8/21/19
//  Project 8/22
//note to future self, just dont. Also remake canvas in the html file to make it 
//global as to get a descent game over screen. Other than that you are done.

var balls = [];
var x = 1//prompt("Number of Balls","42"); //user entered number of balls page dialog
var cnv = createCanvas(800, 800);
function setup() {
  //var cnv = createCanvas(800, 800);
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(q=0;q<x;q++){ //create array with number of balls wanted
    balls[q] = new Ball(random(width),random(height),random(-5,5),random(-5,5))
  }
  paddle1 = new Paddle(20,400);
}


function draw() {
  //for(i=1;i<3;i++){} put other function inside this to run at 60fps
  // if(p<5){
ballsDraw();
  // }
}

function ballsDraw(){
  background(5,5,5,50)//get trails back but just a little bit
  for(i=0;i<x;i++){
balls[i].run();
}
paddle1.run();
}
