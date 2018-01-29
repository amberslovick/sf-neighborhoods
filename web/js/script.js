$(document).ready(function() {
	$(".parks, .d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10").hover(
		function(){ // mousein
			var sdname = $(this).data("name");
			$("#dist-popup").text(sdname);
			$("#dist-popup").fadeIn();
		}, function(){ // mouseout
			// stuff on mouse out
			//$("#dist-popup").fadeOut();
		}
	);
	$("#back").hover(
		function(){ // mousein
			$("#dist-popup").fadeOut();
		}, function(){ // mouseout
			//$("#dist-popup").fadeOut();
		}
	);
	$(document).on('mousemove', function(e){
	    $('#dist-popup').css({
	       left:  e.pageX,
	       top:   e.pageY
	    });
	});
});