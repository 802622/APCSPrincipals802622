//  Nayan Smuek
// 	8/21/19
//  Project 9/11
var z = prompt("how many balls", 2)
var balls = [];
var l = 0;
var t = 0;
var I = z;
function setup() {
  var ctx = createCanvas(600, 600);//make canvas
  ctx.position((windowWidth-width)/2, 30);//put canvas in the middle
  background(5, 5, 5);//make black background
  fill(200, 30, 150);
  for(x=0;x<z;x++){
    y=x;
  balls[x] = new Ball(random(width),random(height),random(-5,5),random(-5,5),y)//make the game ball
  }
  paddle = new Paddle(300,500);
}

function keyPressed() {
  console.log("key pressed");
  t++;
}

function draw() {
  if(l < 30){
    background(5,5,255);//wipe background make blue
    var w = "Press Any Button to Start!";//win string
    textSize(30);//make text fit
    fill(255, 255, 255);//make win white
    text(w, 150, 300);//write you win
    if(t > 1){
    l++;
    }
    console.log(l);
  }
  if((l > 29)&&(l<120)){
    background(5,5,255);//wipe background make blue
    var w = "Move with your mouse!";//win string
    textSize(30);//make text fit
    fill(255, 255, 255);//make win white
    text(w, 150, 300);//write you win
    l++;
    console.log(l);
  }
  if((l > 119)&&(l<140)){
    background(5,5,255);//wipe background make blue
    var w = "Reach 20 points before you run out";//win string
    textSize(30);//make text fit
    fill(255, 255, 255);//make win white
    text(w, 150, 300);//write you win
    l++;
    console.log(l);
  }
  if(l > 139){
    paddle.run();
    for(var i = 0; i < balls.length; i++){
        balls[i].run();
    }
}
}
