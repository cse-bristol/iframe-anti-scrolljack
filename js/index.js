"use strict";

/*global module, require*/

var d3 = require("d3");

module.exports = function() {
    var disable = 0;
    
    if (window.frameElement) {
	window.parent.addEventListener("scroll", function() {
	    if (!disable) {
		window.frameElement.style.pointerEvents = "none";
	    }
	    
	    disable++;
	    
	    window.setTimeout(
		function() {
		    disable--;

		    if (!disable) {
			window.frameElement.style.pointerEvents = "auto";
		    }
		},
		500
	    );
	});
    }
};
