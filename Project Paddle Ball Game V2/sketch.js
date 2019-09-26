//  Nayan Smuek
// 	8/21/19
//  Project 9/11
var balls = [];
var mode="null";
function setup() {
  var ctx = createCanvas(600, 600);//make canvas
  ctx.position((windowWidth-width)/2, 30);//put canvas in the middle
  background(5, 5, 5);//make black background
  fill(200, 30, 150);
  paddle = new Paddle(300,500);
  easy = new button(100,450,"   easy",2);//55 to y 25 to x
  medium = new button(250,450,"medium",3);
  hard = new button(400,450,"   hard",1);
  direct = new button(400,50," directions",0);
  restart = new button(245,300," restart",1);
}

function start(){
  easy.run();
  medium.run();
  hard.run();
  direct.run();

  textSize(70);//make text fit
  fill(255,255,255);//make text color
  text("Paddle Ball", 130, 200);//write you win

    if(mouseIsPressed&&mouseX>100&&mouseX<210&&mouseY>450&&mouseY<505){
        mode='easy'
        console.log("easy");
      }
    if(mouseIsPressed&&mouseX>250&&mouseX<360&&mouseY>450&&mouseY<505){
      mode='medium'
      console.log("medium");
    }
    if(mouseIsPressed&&mouseX>400&&mouseX<510&&mouseY>450&&mouseY<505){
      mode='hard'
      console.log("hard");
    }
    if(mouseIsPressed&&mouseX>400&&mouseX<510&&mouseY>50&&mouseY<105){
      mode='direct'
      console.log("direct");
    }
}

function load(x){
  for(q=0;q<x;q++){
  balls[q] = new Ball(random(width),random(height,300),random(-5,5),random(-5,5),q)//make the game ball
  }
}

function draw() {

    if(mode=="null"){
      start();
  }

  if(mode=="easy"){
    load(5);
    mode="ready";
  }

  if(mode=="medium"){
    load(10);
    mode="ready";
  }

  if(mode=="hard"){
    load(20);
    mode="ready";
  }

  if(mode=="direct"){
    background(5,5,5);
    textSize(20);//make text fit
    fill(255,255,255);//make text color
    text("Hit all of the balls, \nDon't let them hit the back of the \npaddle", 130, 200);//write you win
    restart.run();

    if(mouseIsPressed&&mouseX>300&&mouseX<410&&mouseY>300&&mouseY<355){
      mode="restart"
      console.log("restart");
    }
  }

  if(mode=="win"){
    background(5,5,5);
    textSize(70);//make text fit
    fill(255,255,255);//make text color
    text("  You Win", 130, 200);//write you win
    restart.run();
    console.log("here");

    if(mouseIsPressed&&mouseX>300&&mouseX<410&&mouseY>300&&mouseY<355){
      mode="restart"
      console.log("restart");
  }
}

if(mode=="lose"){
  background(5,5,5);
  textSize(70);//make text fit
  fill(255,255,255);//make text color
  text(" You Lose", 130, 200);//write you win
  restart.run();
  console.log("here");

  if(mouseIsPressed&&mouseX>300&&mouseX<410&&mouseY>300&&mouseY<355){
    mode="restart"
    console.log("restart");
}
}

  if(mode=="restart"){
    mode=="null";
  setup();
  start();
  }

  if(mode=="ready"){
    paddle.run();
    for(var i = 0; i < balls.length; i++){
      balls[i].run();
    }

    if(balls.length==0){
      mode="win";
    }
  }
}