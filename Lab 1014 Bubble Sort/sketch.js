//  Nayan Smuek
function setup() {
  var list = [3,6,10,11,12,8,2,9,5,1,4];//to be sorted
  iteration = 0;//to count how long it takes to sort
  console.log("original: " + list);//put list pre sorted
sorting = true;//you need to sort

// sorting = false;//no more sorting needed however the rest of the statment still finishes unless the itterate backwards loop sets it back to true because stuff is still out of order
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
         sorting = true;//sorting still needed
      }//this is needed so the sort dosn't end up doing a whole extra iteration sometimes
   }//stop iterating
   iteration++;//say you did one loop
   console.log("iteration: " + iteration + "\n arrary: " + list);//print out list at iteration to show change
}//if sorting isnt true
console.log("done: " + list);//say finished and print array
}//end setup

//  The draw function is called @ 30 fps
function draw() {

}
