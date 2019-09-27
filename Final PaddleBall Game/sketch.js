//  Nayan Smuek
// 	8/21/19
//  Project 9/11
var balls = [];//to make balls
var mode="null";//to put it in start state
function setup() {
  var ctx = createCanvas(600, 600);//make canvas
  ctx.position((windowWidth-width)/2, 30);//put canvas in the middle
  background(5, 5, 5);//make black background
  fill(200, 30, 150);//make color
  paddle = new Paddle(300,500);//declare paddle
  easy = new button(100,450,"   easy",2);//55 to y 25 to x
  medium = new button(250,450,"medium",3);//mode button
  hard = new button(400,450,"   hard",1);//mode button
  direct = new button(400,50," directions",0);//mode button
  restart = new button(245,300," restart",1);//mode button
}

function start(){
  easy.run();//mode button
  medium.run();//mode button
  hard.run();//mode button
  direct.run();//mode button

  textSize(70);//make text fit
  fill(255,255,255);//make text color
  text("Paddle Ball", 130, 200);//write you win

    if(mouseIsPressed&&mouseX>100&&mouseX<210&&mouseY>450&&mouseY<505){//check if easy button is pressed
        mode='easy'//set to easy
      }
    if(mouseIsPressed&&mouseX>250&&mouseX<360&&mouseY>450&&mouseY<505){//check if medium button is pressed
      mode='medium'//set to medium
    }
    if(mouseIsPressed&&mouseX>400&&mouseX<510&&mouseY>450&&mouseY<505){//check if hard button is pressed
      mode='hard'//set to hard
    }
    if(mouseIsPressed&&mouseX>400&&mouseX<510&&mouseY>50&&mouseY<105){//check if direction button is pressed
      mode='direct'//set to directions screen
    }
}

function load(x){//to make code restartable
  for(q=0;q<x;q++){//loop to create enough balls
  balls[q] = new Ball(random(width),(random(600))/2,random(-5,5),random(-5,5),q)//make the game balls 
  }
}

function draw() {

    if(mode=="null"){//at start
      start();
  }

  if(mode=="easy"){
    load(5);//5 balls
    mode="ready";//switch to game state
  }

  if(mode=="medium"){
    load(10);//10 balls
    mode="ready";//switch to game state
  }

  if(mode=="hard"){
    load(20);//20 balls
    mode="ready";//switch to game state
  }

  if(mode=="direct"){//for directions
    background(5,5,5);//get rid of other stuff
    textSize(20);//make text fit
    fill(255,255,255);//make text color
    text("Hit all of the balls, \nDon't let them hit the back of the \npaddle", 130, 200);//write you win
    restart.run();//restart the code

    if(mouseIsPressed&&mouseX>300&&mouseX<410&&mouseY>300&&mouseY<355){//if restart button is pressed
      mode="restart"//restart
    }
  }

  if(mode=="win"){
    background(5,5,5);//get rid of other stuff
    textSize(70);//make text fit
    fill(255,255,255);//make text color
    text("  You Win", 130, 200);//write you win
    restart.run();//restart screen

    if(mouseIsPressed&&mouseX>300&&mouseX<410&&mouseY>300&&mouseY<355){//seperate code for when you win/lose
      mode="restart"//restart here
  }
}

if(mode=="lose"){
  background(5,5,5);//get rid of other stuff
  textSize(70);//make text fit
  fill(255,255,255);//make text color
  text(" You Lose", 130, 200);//write you lose
  restart.run();//restart screen

  if(mouseIsPressed&&mouseX>300&&mouseX<410&&mouseY>300&&mouseY<355){//seperate code for when you win/lose
    mode="restart"//restart here
}
}

  if(mode=="restart"){//to reset code
    mode=="null";//start conditions
  setup();//run start functions
  start();
  }

  if(mode=="ready"){//if game is goung
    paddle.run();//run paddle
    for(var i = 0; i < balls.length; i++){//run balls once
      balls[i].run();//run the ball
    }

    if(balls.length==0){//if no more balls
      mode="win";//you win
    }
  }
}