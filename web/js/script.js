$(document).ready(function() {
	$(".parks, .d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10").hover(
		function(){ 
			// mousein
			var sdname = $(this).data("name");
			$("#dist-popup").text(sdname);
			$("#dist-popup").stop(true, true).fadeIn();
		}, function(){ 
			// mouseout
		}
	);
	$("#back").hover(
		function(){ 
			// mousein
			$("#dist-popup").stop(true, true).fadeOut();
		}, function(){ 
			// mouseout
		}
	);
	$(document).on('mousemove', function(e){
	    $('#dist-popup').css({
	       left:  e.pageX - $('#dist-popup').width()/2,
	       top:   e.pageY - 40
	    });
	});
});