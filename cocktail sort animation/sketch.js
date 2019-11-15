//  Nayan Smuek
function setup() {
   var ctx = createCanvas(550, 500);//make canvas
   ctx.position((windowWidth-width)/2, 30);//put canvas in the middle
   background(5, 5, 5);//make black background
   fill(200, 30, 150);
   frameRate(1);

}//end setup



iteration = 0;//to count how long it takes to sort
for(x=0;x<10;x++){
 var bars = [1,2,3,4,5,6,7,8,9,10];
 var rand = [7,4,5,2,1,3,9,10,6,8];//randomly shuffle
 }


 for(x=0;x<10;x++){
    
    var move = 50*x;
    //bars[x] = new bar((100+move),(100+move)) //I need to make it so th bars dont have a preordained location
    bars[x] = new bar((100+move),(50*rand[x]),rand[x]);
    }


shuf(bars);
console.log("first" + bars);

//  The draw function is called @ 30 fps
function draw() {

   drw();
   console.log("bars");
   console.log(bars);
sortin();
//sortin();

}


// function sot() {
//    console.log(bars);
//    bars.sort(function (a, b) {
//       drw();
//       return a.height - b.height;
//     });
// }

function sortin() {
   sorting = true;//you need to sort
while (sorting == true){//if you need to sort then
//possible to draw stuff here
   for (let x=0;x<bars.length-1;x++){//while there is things to sort iterate up
      if (bars[x].xl > bars[x+1].xl){//check if a number is to far down
         temp = bars[x].xl;//if yes than swap
         bars[x].xl = bars[x + 1].xl;//swap numbers
         bars[x+1].xl = temp;//swap numbers
         // console.log("drw");
         // drw();
         sorting = true;//you still need to sort 
      }//end swap
      drw();
   }//stop iterating foward

  sorting = false;//no more sorting needed however the rest of the statment still finishes unless the itterate backwards loop sets it back to true because stuff is still out of order

   for (let j=bars.length-1;j > 0;j--){//iterate backwards
         if (bars[j-1].xl > bars[j].xl){//if number is to far up
         temp = bars[j].xl;//swap
         bars[j].xl = bars[j - 1].xl;//swap
         bars[j - 1].xl = temp;//swap

      }//end swap
      drw();
   }//stop iterating backwards

   for (let j=bars.length-1;j > 0;j--){//iterate backwards
      if (bars[j-1].xl > bars[j].xl){//if number is to far up
         sorting = true;//sorting still needed
      }//this is needed so the sort dosn't end up doing a whole extra iteration sometimes
      drw();
   }//stop iterating
   console.log(bars);
}//if sorting isnt true
}




function drw(){
   for(x=0;x<10;x++){
      bars[x].run();
   }
}


function shuf(a) {
   var j, x, i;
   for (i = a.length - 1; i > 0; i--) {
       j = Math.floor(Math.random() * (i + 1));
       x = a[i];
       a[i] = a[j];
       a[j] = x;
   }
   return a;
}