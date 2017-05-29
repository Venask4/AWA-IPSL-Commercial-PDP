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
		hyperCatInfo: '<div class="AWA-cat-info"><p>Panels are 2.5mm thick x 1222mm wide</p><p>Length: 2440 mm or 3050mm</p><p>Solid uPVC</p><p>Guide price: £17.72/m2</p></div><div class="AWA-quote-div"><a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img class="image-padding" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/8e9c271e84e7d4355b25ee8fbbf3870e_btn-requestquote.png"></a><p class="bar-phone"> <span class="phonetext">Help &amp; Advice: <br><?xml version="1.0" encoding="utf-8"?> <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 27.7 28.1" style="enable-background:new 0 0 27.7 28.1;" xml:space="preserve" class="AWA-phone-icon"> <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?> <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c067 79.157747, 2015/03/30-23:40:42        "> <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"> <rdf:Description rdf:about=""/> </rdf:RDF> </x:xmpmeta> <?xpacket end="w"?></metadata> <style type="text/css"> .st0{fill: #009e93;} .st1{fill: #009e93;} .st2{fill-rule:evenodd;clip-rule:evenodd;} </style> <g> <g> <path class="st0" d="M-86.3,22.5l9.1,5.5l-2.4-10.4l8-7l-10.6-0.9L-86.3,0l-4.1,9.8l-10.6,0.9l8,7L-95.4,28L-86.3,22.5z M-86.3,22.5"/> </g> </g> <g> <g> <path class="st0" d="M-58.5,1.6c-0.6,0.2-1.1,0.5-1.4,1l-1.8,3c0.3,0,0.6,0,1,0.1l1,0.2l1.4-2.5c0.1-0.1,0.2-0.2,0.3-0.2 c0.1,0,0.2,0,0.3,0L-48,9l6.4,1.7l-15.2-8.8C-57.3,1.5-57.9,1.4-58.5,1.6L-58.5,1.6z M-58.5,1.6"/> </g> <path class="st0" d="M-51.5,11.4h7.3L-61,7.1c-1.2-0.3-2.4,0.4-2.7,1.6l-0.7,2.9c0.3-0.1,0.7-0.2,1.1-0.2h0.9l0.6-2.2 c0.1-0.2,0.3-0.4,0.5-0.3L-51.5,11.4z M-51.5,11.4"/> <path class="st0" d="M-65.6,15v9.3c0,1.2,1,2.3,2.3,2.3h19.9c0.3,0,0.5-0.1,0.7-0.3l4.6-5.1c0.4-0.4,0.6-1,0.6-1.5 c0-0.6-0.2-1.1-0.6-1.5l-4.6-5.1c-0.2-0.2-0.4-0.3-0.7-0.3h-19.9C-64.6,12.8-65.6,13.8-65.6,15L-65.6,15z M-63.4,24.7 c-0.2,0-0.4-0.2-0.4-0.4V15c0-0.2,0.2-0.4,0.4-0.4h19v10.1H-63.4z M-39.5,19.4c0.1,0.2,0.1,0.4,0,0.6l-3,3.3V16L-39.5,19.4z M-39.5,19.4"/> <path class="st0" d="M-62.6,20.8V23c0,0.3,0.3,0.6,0.6,0.6h2.2c0.3,0,0.6-0.3,0.6-0.6v-2.2c0-0.3-0.3-0.6-0.6-0.6H-62 C-62.4,20.3-62.6,20.5-62.6,20.8L-62.6,20.8z M-62.6,20.8"/> <path class="st0" d="M-62.6,16.3v2.2c0,0.3,0.3,0.6,0.6,0.6h2.2c0.3,0,0.6-0.3,0.6-0.6v-2.2c0-0.3-0.3-0.6-0.6-0.6H-62 C-62.4,15.7-62.6,16-62.6,16.3L-62.6,16.3z M-62.6,16.3"/> <path class="st0" d="M-58.1,20.8V23c0,0.3,0.3,0.6,0.6,0.6h2.2c0.3,0,0.6-0.3,0.6-0.6v-2.2c0-0.3-0.3-0.6-0.6-0.6h-2.2 C-57.8,20.3-58.1,20.5-58.1,20.8L-58.1,20.8z M-58.1,20.8"/> <path class="st0" d="M-58.1,16.3v2.2c0,0.3,0.3,0.6,0.6,0.6h2.2c0.3,0,0.6-0.3,0.6-0.6v-2.2c0-0.3-0.3-0.6-0.6-0.6h-2.2 C-57.8,15.7-58.1,16-58.1,16.3L-58.1,16.3z M-58.1,16.3"/> <path class="st0" d="M-53.5,20.8V23c0,0.3,0.3,0.6,0.6,0.6h2.2c0.3,0,0.6-0.3,0.6-0.6v-2.2c0-0.3-0.3-0.6-0.6-0.6H-53 C-53.3,20.3-53.5,20.5-53.5,20.8L-53.5,20.8z M-53.5,20.8"/> <path class="st0" d="M-53.5,16.3v2.2c0,0.3,0.3,0.6,0.6,0.6h2.2c0.3,0,0.6-0.3,0.6-0.6v-2.2c0-0.3-0.3-0.6-0.6-0.6H-53 C-53.3,15.7-53.5,16-53.5,16.3L-53.5,16.3z M-53.5,16.3"/> <path class="st0" d="M-49,20.8V23c0,0.3,0.3,0.6,0.6,0.6h2.2c0.3,0,0.6-0.3,0.6-0.6v-2.2c0-0.3-0.3-0.6-0.6-0.6h-2.2 C-48.7,20.3-49,20.5-49,20.8L-49,20.8z M-49,20.8"/> <path class="st0" d="M-49,16.3v2.2c0,0.3,0.3,0.6,0.6,0.6h2.2c0.3,0,0.6-0.3,0.6-0.6v-2.2c0-0.3-0.3-0.6-0.6-0.6h-2.2 C-48.7,15.7-49,16-49,16.3L-49,16.3z M-49,16.3"/> </g> <g> <g> <path class="st0" d="M192.3,20.3c-2.2,0-3.9,1.7-3.9,3.9c0,2.1,1.7,3.9,3.9,3.9c2.2,0,3.9-1.7,3.9-3.9 C196.2,22,194.5,20.3,192.3,20.3L192.3,20.3z M192.3,26.1c-1.1,0-1.9-0.9-1.9-1.9c0-1.1,0.9-1.9,1.9-1.9c1.1,0,1.9,0.9,1.9,1.9 C194.3,25.3,193.4,26.1,192.3,26.1L192.3,26.1z M221.7,17.4v4.2c0,1-0.8,1.9-1.9,1.9h-2c-0.4-2.5-2.5-4.4-5.1-4.4 c-2.6,0-4.7,1.9-5.1,4.4h-10.2c-0.4-2.5-2.5-4.4-5.1-4.4c-2.6,0-4.7,1.9-5.1,4.4h-2.5c-1,0-1.9-0.8-1.9-1.9v-4.2H221.7z M212.7,20.3c-2.2,0-3.9,1.7-3.9,3.9c0,2.1,1.7,3.9,3.9,3.9c2.1,0,3.9-1.7,3.9-3.9C216.6,22,214.8,20.3,212.7,20.3L212.7,20.3z M212.7,26.1c-1.1,0-1.9-0.9-1.9-1.9c0-1.1,0.9-1.9,1.9-1.9c1.1,0,1.9,0.9,1.9,1.9C214.6,25.3,213.8,26.1,212.7,26.1L212.7,26.1z M220.9,13.2l-7.4-7.3c-0.5-0.5-1.1-0.7-1.8-0.7h-3.7V3.8c0-1-0.8-1.9-1.9-1.9h-21.5c-1,0-1.9,0.8-1.9,1.9v0.3L175.2,5l13.5,1.8 L175,8.1l13.6,1.9L175,11.2l7.8,1.5l0,3.7h38.9V15C221.7,14.3,221.4,13.7,220.9,13.2L220.9,13.2z M217.7,13.5h-7.1 c-0.2,0-0.3-0.1-0.3-0.3V7.7c0-0.2,0.1-0.3,0.3-0.3h1.4c0.1,0,0.2,0,0.2,0.1l5.8,5.5C218.1,13.1,218,13.5,217.7,13.5L217.7,13.5z M217.7,13.5"/> </g> </g> <g> <g> <path class="st0" d="M74.3,20.3c-2.2,0-3.9,1.7-3.9,3.9c0,2.1,1.7,3.9,3.9,3.9c2.2,0,3.9-1.7,3.9-3.9C78.2,22,76.4,20.3,74.3,20.3 L74.3,20.3z M74.3,26.1c-1.1,0-1.9-0.9-1.9-1.9c0-1.1,0.9-1.9,1.9-1.9c1.1,0,1.9,0.9,1.9,1.9C76.2,25.3,75.4,26.1,74.3,26.1 L74.3,26.1z M103.7,17.4v4.2c0,1-0.8,1.9-1.9,1.9h-2C99.4,21,97.3,19,94.7,19c-2.6,0-4.7,1.9-5.1,4.4H79.4C79,21,76.9,19,74.3,19 c-2.6,0-4.7,1.9-5.1,4.4h-2.5c-1,0-1.9-0.8-1.9-1.9v-4.2H103.7z M94.7,20.3c-2.2,0-3.9,1.7-3.9,3.9c0,2.1,1.7,3.9,3.9,3.9 c2.1,0,3.9-1.7,3.9-3.9C98.6,22,96.8,20.3,94.7,20.3L94.7,20.3z M94.7,26.1c-1.1,0-1.9-0.9-1.9-1.9c0-1.1,0.9-1.9,1.9-1.9 c1.1,0,1.9,0.9,1.9,1.9C96.6,25.3,95.7,26.1,94.7,26.1L94.7,26.1z M102.9,13.2l-7.4-7.3c-0.5-0.5-1.1-0.7-1.8-0.7h-3.7V3.8 c0-1-0.8-1.9-1.9-1.9H66.7c-1,0-1.9,0.8-1.9,1.9v0.3L57.2,5l13.5,1.8L57,8.1L70.6,10L57,11.2l7.8,1.5l0,3.7h38.9V15 C103.7,14.3,103.4,13.7,102.9,13.2L102.9,13.2z M99.7,13.5h-7.1c-0.2,0-0.3-0.1-0.3-0.3V7.7c0-0.2,0.1-0.3,0.3-0.3h1.4 c0.1,0,0.2,0,0.2,0.1l5.8,5.5C100.1,13.1,100,13.5,99.7,13.5L99.7,13.5z M99.7,13.5"/> </g> </g> <g> <path class="st0" d="M53,117.9c-4,2.4-6.8,5.5-8,6.9l-3-2.3c-0.1-0.1-1.7,1.4-1.7,1.4l5.4,5.5c0,0,0.1,0.1,0.2,0.1c0,0,0,0,0,0 c0.1,0,0.1-0.1,0.2-0.1c0.9-2.2,3.8-6.9,7.5-10.3c0.1-0.1,0.1-0.2,0.1-0.2C53.7,118.8,53.1,117.9,53,117.9L53,117.9z M53,117.9"/> <path class="st0" d="M56.6,113c-8.2,0-9.6-3.1-9.6-3.2c-0.1-0.2-0.2-0.3-0.4-0.3h0c-0.2,0-0.3,0.1-0.4,0.3c0,0-1.4,3.2-9.6,3.2 c-0.2,0-0.4,0.2-0.4,0.4v14c0,5.7,9.9,10.1,10.3,10.3c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.4-0.2,10.3-4.6,10.3-10.3v-14 C57,113.2,56.8,113,56.6,113L56.6,113z M54.7,126.6c0,4.5-7.7,7.9-8,8.1c0,0-0.1,0-0.1,0s-0.1,0-0.1,0c-0.3-0.1-8-3.6-8-8.1v-11 c0-0.2,0.1-0.3,0.3-0.3c6.4,0,7.5-2.5,7.6-2.5c0-0.1,0.2-0.2,0.3-0.2h0c0.1,0,0.2,0.1,0.3,0.2c0,0,1.1,2.5,7.6,2.5 c0.2,0,0.3,0.1,0.3,0.3V126.6z M54.7,126.6"/> </g> <g> <path class="st0" d="M90.7,58.1c-4,2.4-6.8,5.5-8,6.9l-3-2.3C79.7,62.5,78,64,78.1,64l5.4,5.5c0,0,0.1,0.1,0.2,0.1c0,0,0,0,0,0 c0.1,0,0.1-0.1,0.2-0.1c0.9-2.2,3.8-6.9,7.5-10.3c0.1-0.1,0.1-0.2,0.1-0.2C91.4,58.9,90.8,58,90.7,58.1L90.7,58.1z M90.7,58.1"/> <path class="st0" d="M94.3,53.2c-8.2,0-9.6-3.1-9.6-3.2c-0.1-0.2-0.2-0.3-0.4-0.3h0c-0.2,0-0.3,0.1-0.4,0.3c0,0-1.4,3.2-9.6,3.2 c-0.2,0-0.4,0.2-0.4,0.4v14c0,5.7,9.9,10.1,10.3,10.3c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0c0.4-0.2,10.3-4.6,10.3-10.3v-14 C94.7,53.3,94.5,53.2,94.3,53.2L94.3,53.2z M92.4,66.8c0,4.5-7.7,7.9-8,8.1c0,0-0.1,0-0.1,0s-0.1,0-0.1,0c-0.3-0.1-8-3.6-8-8.1v-11 c0-0.2,0.1-0.3,0.3-0.3c6.4,0,7.5-2.5,7.6-2.5c0-0.1,0.2-0.2,0.3-0.2h0c0.1,0,0.2,0.1,0.3,0.2c0,0,1.1,2.5,7.6,2.5 c0.2,0,0.3,0.1,0.3,0.3V66.8z M92.4,66.8"/> </g> <g> <g> <path class="st1" d="M27,21.8l-4.3-4.3c-0.9-0.8-2.3-0.8-3.1,0.1l-2.2,2.2c-0.1-0.1-0.3-0.2-0.4-0.2c-1.4-0.8-3.2-1.8-5.2-3.7 c-2-2-3-3.8-3.7-5.2C8,10.5,8,10.3,7.9,10.2l1.4-1.4L10,8c0.9-0.9,0.9-2.3,0.1-3.1L5.8,0.6C5-0.2,3.6-0.2,2.7,0.7L1.5,1.9l0,0 C1.1,2.4,0.8,3,0.5,3.7C0.3,4.3,0.2,4.9,0.1,5.4c-0.6,4.7,1.6,8.9,7.4,14.7c8,8,14.5,7.4,14.8,7.4c0.6-0.1,1.2-0.2,1.8-0.4 c0.6-0.2,1.2-0.6,1.7-1l0,0L27,25C27.9,24.1,27.9,22.7,27,21.8L27,21.8z M27,21.8"/> </g> </g> <g> <path class="st1" d="M72,12.8h-1.6L72,5.1h4.3L76,6.5h-2.7l-0.4,2h2.5l-0.3,1.3h-2.5L72,12.8z"/> <path class="st1" d="M79.2,6.8c0.2,0,0.4,0,0.5,0.1l-0.3,1.5c-0.2-0.1-0.3-0.1-0.5-0.1c-0.4,0-0.8,0.2-1.1,0.5 c-0.3,0.3-0.5,0.8-0.7,1.4l-0.6,2.6H75l1.2-5.8h1.2L77.4,8h0C77.9,7.2,78.5,6.8,79.2,6.8z"/> <path class="st1" d="M81.4,12.9c-0.7,0-1.3-0.2-1.7-0.6c-0.4-0.4-0.6-0.9-0.6-1.7c0-0.7,0.1-1.4,0.4-2c0.3-0.6,0.7-1,1.2-1.4 c0.5-0.3,1-0.5,1.7-0.5c0.6,0,1.1,0.1,1.4,0.4c0.3,0.3,0.5,0.7,0.5,1.2c0,0.7-0.3,1.2-0.9,1.5c-0.6,0.4-1.4,0.5-2.5,0.5h-0.3l0,0.1 v0.1c0,0.3,0.1,0.6,0.3,0.7c0.2,0.2,0.4,0.3,0.8,0.3c0.3,0,0.6,0,0.8-0.1c0.2-0.1,0.5-0.2,0.9-0.3v1.2 C82.8,12.7,82.1,12.9,81.4,12.9z M82.2,8c-0.3,0-0.6,0.1-0.9,0.4c-0.3,0.3-0.4,0.6-0.5,1h0.2c0.5,0,1-0.1,1.3-0.3 c0.3-0.2,0.5-0.4,0.5-0.7C82.8,8.1,82.6,8,82.2,8z"/> <path class="st1" d="M86.6,12.9c-0.7,0-1.3-0.2-1.7-0.6c-0.4-0.4-0.6-0.9-0.6-1.7c0-0.7,0.1-1.4,0.4-2c0.3-0.6,0.7-1,1.2-1.4 c0.5-0.3,1-0.5,1.7-0.5c0.6,0,1.1,0.1,1.4,0.4c0.3,0.3,0.5,0.7,0.5,1.2c0,0.7-0.3,1.2-0.9,1.5c-0.6,0.4-1.4,0.5-2.5,0.5h-0.3l0,0.1 v0.1c0,0.3,0.1,0.6,0.3,0.7c0.2,0.2,0.4,0.3,0.8,0.3c0.3,0,0.6,0,0.8-0.1c0.2-0.1,0.5-0.2,0.9-0.3v1.2C88,12.7,87.3,12.9,86.6,12.9 z M87.4,8c-0.3,0-0.6,0.1-0.9,0.4c-0.3,0.3-0.4,0.6-0.5,1h0.2c0.5,0,1-0.1,1.3-0.3C87.8,9,88,8.8,88,8.5C88,8.1,87.8,8,87.4,8z"/> </g> <g> <path d="M-355.2,189.9c-113.1,0-204.8,91.7-204.8,204.8c0,113.1,91.7,204.8,204.8,204.8s204.8-91.7,204.8-204.8 C-150.4,281.6-242.1,189.9-355.2,189.9L-355.2,189.9z M-355.2,567.5c-95.4,0-172.8-77.4-172.8-172.8c0-95.4,77.4-172.8,172.8-172.8 c95.4,0,172.8,77.4,172.8,172.8C-182.4,490.1-259.8,567.5-355.2,567.5L-355.2,567.5z M-355.2,567.5"/> <path class="st2" d="M-306.6,363.3h-35.6v-26c0-8,8.2-9.8,12.1-9.8h23v-35.1l-26.4-0.1c-36,0-44.2,26.2-44.2,42.9v28.1h-26.1v36.2 h26.1v97.6h35.5v-97.6h30.1L-306.6,363.3z M-306.6,363.3"/> </g> <g> <path d="M88.8,189.9c-113.1,0-204.8,91.7-204.8,204.8c0,113.1,91.7,204.8,204.8,204.8s204.8-91.7,204.8-204.8 C293.6,281.6,201.9,189.9,88.8,189.9L88.8,189.9z M88.8,567.5C-6.6,567.5-84,490.1-84,394.7c0-95.4,77.4-172.8,172.8-172.8 c95.4,0,172.8,77.4,172.8,172.8C261.6,490.1,184.2,567.5,88.8,567.5L88.8,567.5z M88.8,567.5"/> <path d="M191.2,326.6c-3.4,2.1-13.8,6.1-23.4,7.2c6.2-3.6,15.4-15.4,17.6-24.7c-5.9,4.1-19.6,10.1-26.4,10.1c0,0,0,0,0,0 c-7.7-8.7-18.5-14.1-30.6-14.1c-23.3,0-42.2,20.4-42.2,45.5c0,3.5,0.4,6.9,1.1,10.1h0c-31.6-0.9-68.6-18-89.5-47.2 C-15,337.4-3.9,364,10.6,373.6c-5,0.4-14.1-0.6-18.4-5.1c-0.3,15.8,6.8,36.8,32.6,44.4c-5,2.9-13.8,2.1-17.6,1.4 c1.3,13.4,18.7,30.9,37.8,30.9c-6.8,8.4-29.9,23.8-58.5,18.9c19.4,12.8,42.1,20.1,66.1,20.1c68.2,0,121.1-59.5,118.3-132.9 c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c0-0.2,0-0.4,0-0.7C176.9,345.4,185.2,337.3,191.2,326.6L191.2,326.6z M191.2,326.6"/> </g> <g> <g> <path class="st1" d="M22.9,64L9.4,77.5l-5.2-5.2L0,76.4l9.4,9.4L27,68.1L22.9,64z M22.9,64"/> </g> </g> <g> <path d="M-755.9,290.8l-24.3,24.3l79.6,79.6l-79.6,79.6l24.3,24.3L-652,394.7L-755.9,290.8z M-755.9,290.8"/> </g> </svg>&nbsp<span data-calltracks-replaced-at="1486964770862" data-calltracks-orig-innerhtml="0114%20332%200388" onclick="window.location="tel:"+this.innerHTML;" class="calltracks_ipslukcouk-main">0114 332 0669</span> </span></p></div><p class="AWA-finish">Satin Finish</p>',
		getQuoteButton: '<div class="AWA-quote-div"><a href="https://www.ipsluk.co.uk/customer-service/contact-us-free-brochure.html"><img class="image-padding" src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/8e9c271e84e7d4355b25ee8fbbf3870e_btn-requestquote.png"></a><p class="bar-phone"> <span class="phonetext">Help &amp; Advice:<img src="https://www.ipsluk.co.uk/skin/frontend/rwd/default/images/telephone-white.svg" class="AWA-phone-icon"><span data-calltracks-replaced-at="1486964770862" data-calltracks-orig-innerhtml="0114%20332%200388" onclick="window.location="tel:"+this.innerHTML;" class="calltracks_ipslukcouk-main">0114 332 0669</span> </span></p></div>',
		PaulDiv: '<div class="AWA-Paul-div"> <div class="AWA-image-profile"> <img src="http://useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/e23b84cffc7d257cfa570d0fb6ef4137_paul.png"> <p>Paul Clinton</p> <p>Product Adviser</p> </div> <h3>IPSL- The UK\'s no 1 specialist in wall cladding</h3> <ul class="AWA-app-list"> <li>Supply only or full installation service</li> <li>Free delivery on orders over £100</li> <li>100% guaranteed- 10 year warranty</li> <li>Free installation helpline and product advice</li> <li>Free, no obligation site surveys</li> </ul> </div>'
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
		.AWA-app-list {\
			columns: 2;\
			-webkit-columns: 2;\
  			-moz-columns: 2;\
  			margin: 0 auto;\
  			width: 750px;\
  		}\
  		.AWA-Paul-div {\
  			width: 100%;\
  			display: block;\
  			background: #c4e8ff;\
  			overflow: auto;\
  		}\
  		.AWA-Paul-div h3{\
  			width: auto;\
  			float: none;\
  		}\
  		.AWA-Paul-div .AWA-app-list {\
  			display: block;\
  			clear: none;\
  			width: auto;\
  		}\
  		.AWA-Paul-div .AWA-app-list li {\
  			color: black;\
  			font-weight: bold;\
  		}\
  		.AWA-Paul-div p {\
  			margin: 0 0 0 12px;\
  		}\
  		.AWA-image-profile {\
  			float: left;\
  			width: 165px;\
  		}\
  		.AWA-phone-icon {\
  			height: 20px;\
  			width: 20px;\
  		}\
  		.col2-left-layout .col-main {\
  			width: 100%;\
  		}\
  		.AWA-app-list-title {\
  			float: none !important;\
  			width: 500px !important;\
  			margin: 0 auto;\
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

			// Move application list up
			var $appListTitle = $('h3:contains("Ideal for medical and food")');
			var $appList = $('li:contains("Operating Theatres")').parent();
			$('.right100.lefts').prepend($appListTitle);
			$appListTitle.after($appList);
			$appListTitle.addClass('AWA-app-list-title');
			$appListTitle.text('Proclad Hypergrade meets all regulatory standards for:');
			$appList.addClass('AWA-app-list');

			// Add Paul div
			$appList.after(exp.vars.PaulDiv);

			// Move active ingredients div
			var $activeIngredients = $('h3:contains("Active Antimicrobial Ingredients")');
			var $activeParagraph = $activeIngredients.next()
			$activeParagraph.css('color', 'red');

			// Re-run calltracks script
			$.ajax({
				url: 'https://lite.calltracks.com/calltracks_web_number_dynamics/loader.js',
				dataType: 'script',
			});
		}
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);