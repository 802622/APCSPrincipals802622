//Nayan Smuek Checkerboard Lab
var squares = [];//to make balls
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  loadSquares();

var p = squares.length+1;
  for(var i = 0; i < squares.length; i++){
    squares[i].render();
   }
}

function loadSquares(){
  for(q=0;q<71;q++){//loop to create enough balls
    if (q%2 == 0){
      cl = 1;
    } else {
      cl = 2;
    }
    r=q;

    switch(true){

    case(r<=8): squares[q] = new square(r*100,0,cl);
    break;

    case(q<=16):squares[q] = new square(((r-9)*100),100,cl);   
    break;

    case(q<=25):squares[q] = new square(((r-18)*100),200,cl); 
    break; 
      
      
    case(q<=34):squares[q] = new square(((r-27)*100),300,cl); 
    break;

    case(q<=43):squares[q] = new square(((r-36)*100),400,cl);
    break;

    case(q<=52):squares[q] = new square(((r-45)*100),500,cl);
    break;

    case(q<=61):squares[q] = new square(((r-54)*100),600,cl); 
    break;

    case(q<=70):squares[q] = new square(((r-63)*100),700,cl);
    break;
    }
  }
}