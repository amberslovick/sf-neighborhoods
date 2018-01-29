$(document).ready(function() {
	$(".parks, .d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10").hover(
		function(){ // mousein
			var sdname = $(this).data("name");
			$("#dist-popup").text(sdname);
		}, function(){ // mouseout

		}
	);
});