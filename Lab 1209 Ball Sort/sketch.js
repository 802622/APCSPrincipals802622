//  Nayan Smuek
function setup() {
   var ctx = createCanvas(600, 600);//make canvas
   ctx.position((windowWidth-width)/2, 30);//put canvas in the middle
   background(5, 5, 5);//make black background
   fill(200, 30, 150);//make color
//to be sorted
balls = [];
for(q=0;q<20;q++){//loop to create enough balls
   var red = Math.floor(Math.random() * 255) + 1;
   balls[q] = new Ball(50+(25*q),300,red)//make the game balls 
}

for(i = 0;i<20;i++){
    console.log(i);
   curent=balls[i].clr;
   var prev;
   for(var prev = i - 1; prev >= 0 && balls[prev].clr > curent; prev--) {
      balls[prev+1].clr = balls[prev].clr;
    }
   balls[prev+1].clr = curent;
}
for(var x = 0; x < 20; x++){//run balls once
   balls[x].run();//run the ball
 }
}//end setup

//  The draw function is called @ 30 fps
function draw() {
}