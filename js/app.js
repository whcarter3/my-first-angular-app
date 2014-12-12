angular
	.module("angularApp", [])
	.filter('reverse', function() {
		  return function(input, lowercase) {
		    input = input || '';
		    var out = "";
		    for (var i = 0; i < input.length; i++) {
		      out = input.charAt(i) + out;
		    }
		    if (lowercase) {
		      out = out.toLowerCase();
		    }
		    return out;
		  };
		});
