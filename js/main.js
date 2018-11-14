/*All thanks to O'Reilly Learning JS 3rd Edition and paperjs.org reference*/


$(document).ready(function() {
	'use strict';
	console.log('main.js loaded');
	//boilerplate for setting up Paper.js, load in global scope
	paper.install(window);
	//attache paper.js to our canvas by ID
	paper.setup(document.getElementById('mainCanvas'));
	
	/*
	var drawCircle = function() {
		var c = Shape.Rectangle(40, 150, 320, 80);
		c.fillColor = 'black';
		var text = new PointText(200, 200);
		text.justification = 'center';
		text.fillColor = 'white';
		text.fontSize = 20;
		text.content = 'click and drag mouse to draw';
	};
	*/

	function getRandomInt(min, max){
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

    
 	
	
 
    
	 //create path
	var tool = new Tool(); //create tool
	// This function is called whenever the user releases the mouse button AFTER a click
	tool.minDistance = 10;
	var myPath; 
	tool.onMouseDown = function(event) { 
		console.log('you clicked');
		myPath = new Path(); //create a new Path object each time 
		myPath.strokeColor = "#ff0000";
		myPath.strokeColor.hue = getRandomInt(0, 360); // make the line black each time
		myPath.strokeWidth = getRandomInt(0.5,15);

		//myPath.add(event.downPoint); // uses the onMouseUp event handler only and accesses event.downPoint = 
									 //The position of the mouse in project coordinates when the mouse button was last clicked.
		myPath.add(event.point);	 //point = coords where event fired, in this case user releasing mouse button 
		document.getElementById("alerts").innerHTML = '';//click to draw a new line and clears the alert text
	}

	tool.onMouseDrag = function(event) {
		myPath.add(event.point);
	}
   
	//tells paper.js to draw on screen
	//drawCircle();
	paper.view.draw();
});
document.getElementById('clear').onclick = function(){
        canvas = document.getElementById("mainCanvas");  //get ref to our canvas element
        ctx = canvas.getContext("2d"); //get the 2d context of the element
        ctx.clearRect(0, 0, canvas.width, canvas.height); //clears the canvas, but if we click we redraw...
        paper.project.clear(); // paper has project property which is all layers in project, so everything on canvas i guess.  clears them 
        console.log('layers cleared');
        document.getElementById("alerts").innerHTML = 'Sketch Cleared';


}; 

/*use jQuery to navigate to new page...*/
$(document).ready(function goToPage() {
    $("#techPage").click(function () {
        window.open("techred_pages/moduleExample.html"); 
    });
});    