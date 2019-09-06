//  Nayan Smuek
// 	9/6/19
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);

  quiz();
}

function draw() {
}

function quiz(){
  console.log("Problem One");
  q1();
  console.log("Problem Two");
  q2();
}

function q1(){
  var num = 1;
  if(num < 4){
    console.log("Peace");
  }
  console.log("War");
}

function q2(){
  for(var i=14;i>8;i--){
    i=i-4;
    console.log(i);
  }
}