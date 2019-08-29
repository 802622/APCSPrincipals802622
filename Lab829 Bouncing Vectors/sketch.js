//  Nayan Smuek
// 	8/21/19
//  Project 8/22

var balls = [];
var x = prompt("Number of Balls","42"); //user entered number of balls page dialog
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(q=0;q<x;q++){ //create array with number of balls wanted
    balls[q] = new Ball(random(width),random(height),random(-5,5),random(-5,5))
  }
}


function draw() {
  //for(i=1;i<3;i++){} put other function inside this to run at 60fps
ballsDraw();
}

function ballsDraw(){
  background(5,5,5,50)//get rid of ball trails
  for(i=0;i<x;i++){
balls[i].run();
}
}
