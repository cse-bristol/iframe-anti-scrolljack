"use strict";

/*global module, require, setTimeout*/

var d3 = require("d3"),
    pointerEvents = "pointer-events";

module.exports = function() {
    if (window.frameElement && window.parent) {
	var disable = 0,
	    iframe = window.frameElement;
	
	window.parent.addEventListener("scroll", function() {
	    if (!iframe) {
		return;
	    }

	    if (disable === 0) {
		d3.select(iframe)
		    .style(pointerEvents, "none");
	    }
	    
	    disable++;
	    
	    setTimeout(
		function() {
		    if (disable > 0) {
			disable--;
		    }

		    if (!iframe) {
			return;
		    }

		    if (disable === 0) {
			d3.select(iframe)
			    .style(pointerEvents, "auto");
		    }
		},
		500
	    );
	});
    }
};
