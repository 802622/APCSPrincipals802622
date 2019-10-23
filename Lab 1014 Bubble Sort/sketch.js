//  Nayan Smuek
function setup() {
  var list = [];//to be sorted

   //code from http://stackoverflow.com/questions/962802#962890
  for (var a=[],i=0;i<2500;++i) a[i]=i;
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
sorting = true;//you need to sort

while (sorting == true){//if you need to sort then
   for (let x=0;x<list.length-1;x++){//while there is things to sort iterate up
      if (list[x] > list[x+1]){//check if a number is to far down
         temp = list[x];//if yes than swap
         list[x] = list[x + 1];//swap numbers
         list[x+1] = temp;//swap numbers
         sorting = true;//you still need to sort 
      }else{
      sorting = false;}//end swap
   }//stop iterating foward

   for (let j=list.length-1;j > 0;j--){//iterate backwards
      if (list[j-1] > list[j]){//if number is to far up
         sorting = true;//sortiang still needed
      }//this is needed so the sort dosn't end up doing a whole extra iteration sometimes
   }//stop iterating
   iteration++;//say you did one loop
}//if sorting isnt true
console.log("done: " + iteration);//say finished and print array
}//end setup

//  The draw function is called @ 30 fps
function draw() {

}
