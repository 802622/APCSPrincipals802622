//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
x = 400;
y = 400;
speedX = 1;
speedY = 1;


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

}

function ballOne(){
  a = Math.random();
  b = Math.random();
  c = Math.random();
  ellipse(x,y,20,20);
  fill(200,0,0);
    if (x<0){
          speedX=-1*speedX*a;
      }
    if (x>800){
        speedX=-1*speedX*b;
      }
x=x+speedX;
    if (y<0){
        speedY=-1*speedY*c;
    }
    if (y>800){
        speedY=-1*speedY*a;
    }
y=y+speedY;
}
