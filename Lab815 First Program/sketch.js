//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
}

//  The draw function is called @ 30 fps
function draw() {

    // 3d circle
    for (let i = 0; i < 500; i=i+10) {
    var l = 50+i;
    var y = 800-i;
    fill(0,0,l);
    ellipse(400,400,y,y);
    l++;
    }

    //wonkey line
    for (let x = 0; x < 5000; x=x+10) {
    var min=0;
    var max=255;
    var q = Math.random() * (+max - +min) + +min;
    var w = Math.random() * (+max - +min) + +min;
    var e = Math.random() * (+max - +min) + +min;
    var z = 500-x;
    var r =q+150;
    fill(e,q,w);
    ellipse(400,400,r,r);
    }
}
