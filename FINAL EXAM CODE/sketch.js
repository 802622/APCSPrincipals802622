//  Nayan Smuek
// 	8/21/19
//  Project 8/22

var ships = [];
var planet = [];
var x = 4; //user entered number of balls page dialog
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadAll(x);
}

function loadAll(n){
  for(q=0;q<x;q++){
    planet[q] = new Planet(random(800), random(800), 50, 50, q);
  }
  ships[0] = new ship(random(800), random(800), random(-3, 3), random(-3, 3), 1);
}


function draw() {
  background(5, 5, 5, 60);
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
  } 
  for(var i = 0; i < planet.length; i++){
    planet[i].run();
  } 
}

function shipsDraw(){
  //background(5,5,5)//get trails back but just a little bit
if (this.id > -1){
  for(i=0;i<x;i++){
ships[i].run();
  }
}
}