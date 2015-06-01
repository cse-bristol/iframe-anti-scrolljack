"use strict";

/*global module, require*/

var d3 = require("d3"),
    pointerEvents = "pointer-events";

module.exports = function() {
    var disable = 0;
    
	if (window.frameElement) {
	    var iframe = window.frameElement;
	    
	window.parent.addEventListener("scroll", function() {
	    if (!iframe) {
		return;
	    }

	    if (disable === 0) {
		d3.select(iframe)
		    .style(pointerEvents, "none");
	    }
	    
	    disable++;
	    
	    window.setTimeout(
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
