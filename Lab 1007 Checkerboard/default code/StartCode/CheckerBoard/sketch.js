//Nayan Smuek Checkerboard Lab
var squares = [];//to make balls
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  loadSquares();//load squares into an array

  for(var i = 0; i < squares.length; i++){//draw all of the squares
    squares[i].render();
   }
}

function loadSquares(){
  for(q=0;q<71;q++){//loop to create enough balls
    if (q%2 == 0){//if q is even
      cl = 1;//set the color to pink
    } else {
      cl = 2;//set the color to green
    }

    switch(true){//a wierd way to do a switch statment nesasary to indirectly use greater than or less than

    case(q<=8): squares[q] = new square(q*100,0,cl);//code to create a square for the first line
    break;//similar to a } this statment will end the switch and the other cases will not be checked

    case(q<=16):squares[q] = new square(((q-9)*100),100,cl);//code to create a square for the second line
    break;

    case(q<=25):squares[q] = new square(((q-18)*100),200,cl); 
    break; 
      
      
    case(q<=34):squares[q] = new square(((q-27)*100),300,cl); 
    break;

    case(q<=43):squares[q] = new square(((q-36)*100),400,cl);
    break;

    case(q<=52):squares[q] = new square(((q-45)*100),500,cl);
    break;

    case(q<=61):squares[q] = new square(((q-54)*100),600,cl); 
    break;

    case(q<=70):squares[q] = new square(((q-63)*100),700,cl);
    break;
    }
  }
}