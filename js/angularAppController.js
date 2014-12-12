angular
	.module("angularApp")
	.controller("angularAppController", angularAppController);

function angularAppController () {
	var self = this;

	self.test = "Test is good to go!";
	self.reverse = reverse;
	self.randomBGColor = randomBGColor;

	function reverse (s) {
	//reverse the inputed string
	  var o = o || '';
	  for (var i = s.length - 1; i >= 0; i--) {
	    o += s[i];
	   }
	  return o;
	}	
	
	function randomBGColor () {
		var body = document.getElementsByTagName('body');
		var str = "ABCDEF0123456789".split("");
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += str[Math.floor(Math.random() * 16)];
		};
		console.log (color);
		document.body.style.backgroundColor = color;
	}



}