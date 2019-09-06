//  Nayan Smuek
// 	8/21/19
//  Project 8/22

var balls = [];
var mainBall;
var x = prompt("Number of Balls","42"); //user entered number of balls page dialog
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(x);
}

function loadBalls(n){
  for(q=0;q<x;q++){
    mainBall = new Ball(100, 500, 50, 50, -1);
    secondBall = new Ball(100,700,50,50, -2)
    balls[q] = new Triangle(random(800), random(800), random(-3, 3), random(-3, 3), q);
  }
}


function draw() {
  background(5, 5, 5);
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  } mainBall.run();
  secondBall.run();
}

function ballsDraw(){
  background(5,5,5)//get trails back but just a little bit
if (this.id > -1){
  for(i=0;i<x;i++){
balls[i].run();
  }
}
}