# CheckerBoard: Lab 910#

###Objectives###
 - Create a checkerboard background on your canvas 

 

###Part I: Make a constructor for a square object###

 -  Review your Ball Constructor function code</br>
 
 Square objects are going to be simpler than Ball objects.  Ask yourself:</br> 
**What does a square need to know about itself?**

create properties and methods to meet the needs of a square.

  
##Part II: Load Square objects into and array##

 -  A checkerboard has 64 squares (8X8)
 -  If your canvas is 800 X 800, what should be the width of each square object?
 -  Use opposite colors to represent the different squares
 -  Create a function to load the Square objects into your array of squares
   

##Part III: Place the squares on the canvas##

  -  Create a function to draw the square--in the correct position--to create a checkerboard


**Hint:**  Choose the square's location in terms of the control variable for your for loop:

		function loadSquares(){

		  var rowNum = 0;
		  for(var i = 0; i < 64; i++){
		    //get  location properties
		    var x =     //  Choose x in terms of i
		    var y =     //  Choose y in terms of i
			//  Create your location vector
		    var loc = createVector(x, y);
		...


 
----


