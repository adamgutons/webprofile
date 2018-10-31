/*All thanks to O'Reilly Learning JS 3rd Edition and paperjs.org reference*/


$(document).ready(function() {
	'use strict';
	console.log('main.js loaded');
	//boilerplate for setting up Paper.js, load in global scope
	paper.install(window);
	//attache paper.js to our canvas by ID
	paper.setup(document.getElementById('mainCanvas'));
	//create a circle shape, 200x200 is center of canvas, 50 px radius
	//var c = Shape.Circle(200, 200, 50);
	//c.fillColor = 'blue';
	
	/*make a bunch of circles via for loop
	var c;
	for(var x=25; x<400; x+=50){
		for(var y=25; y<400; y+=50){
			c = Shape.Circle(x, y, 20);
			c.fillColor = 'red';
		}
	} 
	*/
	/* use mouse and event to draw Rectangle on the screen
	var tool = new Tool();

	tool.onMouseDown = function(event) {
		var c = Shape.Rectangle(event.point, 20); //  method overloading allows event.point to determing x,y coords of pixels in the cavas element
		c.fillColor = 'green';
	}
	*/

	var c = Shape.Circle(200, 200, 80);
	c.fillColor = 'black';
	var text = new PointText(200, 200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'click & drag';

	
	 //create path
	var tool = new Tool(); //create tool
	// This function is called whenever the user releases the mouse button AFTER a click
	tool.onMouseUp = function(event) { 
		console.log('you clicked');
		var myPath = new Path(); //create a new Path object each time 
		myPath.strokeColor = 'black'; // make the line black each time
		myPath.add(event.downPoint); // uses the onMouseUp event handler only and accesses event.downPoint = 
									 //The position of the mouse in project coordinates when the mouse button was last clicked.
		myPath.add(event.point);	 //point = coords where event fired, in this case user releasing mouse button 
	}
//		function onMouseUp(event) {
//		tool.myPath.add(event.point); //release mouse, and coords are end segment of the line
//	}

	//tells paper.js to draw on screen
	paper.view.draw();
});
