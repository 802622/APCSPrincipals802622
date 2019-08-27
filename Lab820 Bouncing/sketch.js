//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
x = 400;
y = 400;
speedX = 1;
speedY = 1;

a = 200;
b = 200;
speedA = 1;
speedB = 1;

i = 600;
j = 600;
speedI = 1;
speedJ = 1;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  var x,y;
}

function draw() {
  background(5,5,5);
  ballOne();
  ballTwo();
}

function ballOne(){
  ellipse(x,y,20,20);
  fill(200,0,0);
    if (x<0){
          speedX=-1*speedX;
      }
    if (x>800){
        speedX=-1*speedX;
      }
x=x+speedX;
    if (y<0){
        speedY=-1*speedY;
    }
    if (y>800){
        speedY=-1*speedY;
    }
y=y+speedY;
}

function ballTwo(){
  ellipse(a,b,20,20);
  fill(0,200,0);
    if (a<0){
          speedA=-1*speedA;
      }
    if (a>800){
        speedA=-1*speedA;
      }
a=a+speedA;
    if (b<0){
        speedB=-1*speedB;
    }
    if (b>800){
        speedB=-1*speedB;
    }
b=b+speedB;
}

function ballThree(){
  ellipse(i,j,20,20);
  fill(0,0,200);
    if (i<0){
          speedI=-1*speedI;
      }
    if (i>800){
        speedI=-1*speedI;
      }
i=i+speedI;
    if (j<0){
        speedJ=-1*speedJ;
    }
    if (j>800){
        speedJ=-1*speedJ;
    }
j=j+speedJ;
}
