//  Nayan Smuek
function setup() {
  var list = [];//to be sorted

   //code from http://stackoverflow.com/questions/962802#962890
  for (var a=[],i=0;i<500;++i) a[i]=i;
  function shuffle(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;}
   return array;}
   list = shuffle(a);
   //end code from http://stackoverflow.com/questions/962802#962890
iteration = 0;//to count how long it takes to sort

for(i = 0;i<list.length;i++){
   console.log(list);
   iteration++;
   curent=list[i];
   var prev;
   for(var prev = i - 1; prev >= 0 && list[prev] > curent; prev--) {
      list[prev+1] = list[prev];
    }
   list[prev+1] = curent;
}
console.log("done: " + iteration);//say finished and print array
}//end setup

//  The draw function is called @ 30 fps
function draw() {
}