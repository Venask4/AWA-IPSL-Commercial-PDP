//
// CGIT Optimizely Boilerplate - version 0.1.4
//
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

	// Initialise the experiment object
	var exp = {};

	// Wrapper for console.log, to prevent the exp breaking on browsers which don't
	// (always) have 'console' set (e.g. IE9)
	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	// Log the experiment, useful when multiple experiments are running
	exp.log('AWA - Commercial Panels PDP v1');


	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		hyperCatInfo: '<div class="AWA-cat-info"><p>Panels are 2.5mm thick x 1222mm wide</p><p>Length: 2440 mm or 3050mm</p><p>Solid uPVC</p><p>Guide price: £17.72/m2</p></div><p class="AWA-finish">Satin Finish</p>'
		};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		.inner-banner .ban-tag {\
			display: none;\
		}\
		.alenbox {\
			display: none;\
		}\
		.imgbox1.ipad {\
			float: left;\
		}\
		.inner-banner .BNR-bottom {\
			height: auto;\
		}\
		.AWA-finish {\
			margin-top: -16px;\
			margin-left: 231px;\
			font-size: 20px;\
			font-weight: 900;\
			color: black;\
			font-family: Arial Narrow;\
			clear: both;\
		}\
		.AWA-cat-info {\
			float: left;\
			margin-top: 16px;\
		}\
		.AWA-cat-info p {\
			color: black;\
			font-weight: bold;\
		}\
	';


	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// PROCLAD HYPER GRADE
		if (window.location.href.indexOf('proclad-hyper-grade') > -1 ) {
			var $imgbox1 = $('.imgbox1.ipad');
			$imgbox1.after(exp.vars.hyperCatInfo);

		}

	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);