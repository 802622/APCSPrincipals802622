//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  // var cnv = createCanvas(800, 800);
  // cnv.position((windowWidth-width)/2, 30);
  // background(5, 5, 5);
  // fill(200, 30, 150);
  var list = [3,6,1,8,2,9];
  console.log("original: " + list);

  var x=list.length+1;
  // var tmp;
  for(y=1;y<=x;x++){
    if(list[y]>list[y-1]){
      console.log("done: " + list);
    }else{
      tmp = list[y-1];
      list[y-1]=list[y];
      list[y]=tmp;
      console.log("test");
    }
  }




}

//  The draw function is called @ 30 fps
function draw() {

}
