(function (d3) {
	'use strict';

	// This is an example of an ES6 module.
	const message = "Hello VizHub!";

	// You can import API functions like this from D3.js.

	// This line uses D3 to set the text of   the message div.
	d3.select('#message').text(message);

}(d3));