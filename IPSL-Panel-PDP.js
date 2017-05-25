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
		hyperCatInfo: '<div class="AWA-cat-info"><p>Panels are 2.5mm thick x 1222mm wide</p><p>Length: 2440 mm or 3050mm</p><p>Solid uPVC</p><p>Guide price: £17.72/m2</p></div><div class="AWA-quote-div"><a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img class="image-padding" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/8e9c271e84e7d4355b25ee8fbbf3870e_btn-requestquote.png"></a><p class="bar-phone"> <span class="phonetext">Help &amp; Advice: <br><i class="help-icon"></i><span data-calltracks-replaced-at="1486964770862" data-calltracks-orig-innerhtml="0114%20332%200388" onclick="window.location="tel:"+this.innerHTML;" class="calltracks_ipslukcouk-main">0114 332 0669</span> </span></p></div><p class="AWA-finish">Satin Finish</p>',
		getQuoteButton: '<div class="AWA-quote-div"><a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img class="image-padding" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/8e9c271e84e7d4355b25ee8fbbf3870e_btn-requestquote.png"></a><p class="bar-phone"> <span class="phonetext">Help &amp; Advice:<i class="help-icon"></i><span data-calltracks-replaced-at="1486964770862" data-calltracks-orig-innerhtml="0114%20332%200388" onclick="window.location="tel:"+this.innerHTML;" class="calltracks_ipslukcouk-main">0114 332 0669</span> </span></p></div>'
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
			position: absolute;\
			z-index: 0;\
			margin-left: 5%;\
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
			padding-top: 16px;\
			display: inline-block;\
			margin-left: 520px;\
			z-index: 1;\
			position: relative;\
		}\
		.AWA-cat-info p {\
			color: black;\
			font-weight: bold;\
		}\
		.AWA-quote-div {\
			display: inline-block;\
			margin-left: 5%;\
			vertical-align: top;\
    		margin-top: 50px;\
		}\
		.AWA-quote-div .phonetext {\
			color: black;\
			font-weight: bold;\
		}\
		.AWA-quote-div .help-icon {\
			background: hsla(0, 0%, 0%, 0) url(https://www.ipsluk.co.uk/skin/frontend/rwd/default/images/telephone-white.svg) no-repeat scroll 0 0;\
			height: 20px;\
			display: inline-block;\
			margin: 0 0 0 0 !important;\
		}\
		.col2-left-layout .col-main {\
			float: none;\
			margin: 0 auto;\
		}\
		.col-main {\
			float: none;\
		}\
	';


	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// PROCLAD HYPER GRADE
		if (window.location.href.indexOf('proclad-hyper-grade') > -1 ) {
			
			// Add in additional product info
			var $imgbox1 = $('.imgbox1.ipad');
			$imgbox1.after(exp.vars.hyperCatInfo);

			// Hide value ticks and random testimonials
			$('.advive-link.lefts').hide();
			$('.col-left.sidebar.col-left-first').hide();
		}

	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);