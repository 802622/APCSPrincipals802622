//  Nayan Smuek
// 	8/21/19
//  Project 9/11
// make it move towards mouse y at a max speed

var balls = [];
function setup() {
  var ctx = createCanvas(800, 800);//make and position canvas
  ctx.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  balls[1] = new Ball(random(width),random(height),random(-3),random(-5))//make the game ball
  paddle1 = new Paddle(20,400);//make the paddle
  opponent = new ai(780, 400);
}

function draw() {
  balls[1].run();//runs the ball
  paddle1.run();//runs the paddle 
  opponent.run();//run opponent paddle
}
