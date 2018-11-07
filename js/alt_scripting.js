/*All thanks to O'Reilly Learning JS 3rd Edition and paperjs.org reference*/


$(document).ready(function() {
	'use strict';
	console.log('main.js loaded');

    
    /*
	document.getElementById('hide').onclick = function() {
		var x = document.getElementById("hideContent");
        if (x.style.display === "block") {
            x.style.display = "none";
            document.getElementById("hide").value = "Display";
        } else {
        	x.style.display = "block";
        	document.getElementById("hide").value = "Hide";
        }
        
    };
    */ 

      /*
                    function myFunction() {
                        var x = document.getElementById("hideContent");
                        if (x.style.display === "none") {
                            x.style.display = "block";
                            document.getElementById("hide").value = "Hide";
                        } else {
                            x.style.display = "none";
                            document.getElementById("hide").value = "Display";
                        }
                    }
               */     
   


	//tells paper.js to draw on screen
	//drawCircle();
});
function clickMe (button) {
        var x = document.getElementById("hideContent");
        if (x.style.display === "block") {
            x.style.display = "none";
            document.getElementById("hide").value = "Display";
        } else {
            x.style.display = "block";
            document.getElementById("hide").value = "Hide";
        }
    }