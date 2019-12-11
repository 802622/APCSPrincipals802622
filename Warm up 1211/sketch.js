//  Nayan Smuek
var list = [];//to be sorted
function setup() {
  var num = 0;

  while(list.length < 11){
      var r = Math.floor(Math.random() * 100) + 1;
      list[num] = r;
      num++
  }
  logNumber();

  mySort();
  findAvg();
  findMedian();
}//end setup


//  The draw function is called @ 30 fps
function draw() {
}

function mySort(){
   for(i = 0;i<list.length;i++){
      curent=list[i];
      var prev;
      for(var prev = i - 1; prev >= 0 && list[prev] > curent; prev--) {
         list[prev+1] = list[prev];
       }
      list[prev+1] = curent;
   }//end insetion sort
   console.log("sorted: " + list);//say finished and print array
}

function logNumber(){
   console.log("here is the list: " + list);
}

function findAvg(){
   var avg;
   var total = 0;
   for(var i = 0; i < list.length; i++) {
      total = list[i] + total;
   }
   avg = total/list.length;
   console.log("Average is: " + avg);
}

function findMedian(){
   var med;
   med = list[5] + list[6];
   med = med/2;
   console.log("Median is: " + med);
}