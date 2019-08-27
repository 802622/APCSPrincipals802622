//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  var x,y;
}

x = 400;
y = 400;

function draw() {
  background(5, 5, 5);
  rect(x,y,20,20);
  fill(200,0,0);
    if (keyIsPressed){
          y=y-5;
      }
}
