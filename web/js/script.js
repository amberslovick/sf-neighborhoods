$(document).ready(function() {
	var nhoods = ".parks, .d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .d9, .d10";

	$(nhoods).hover(
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
	       left: e.pageX - $('#dist-popup').width()/2,
	       top: e.pageY - 40
	    });
	});

	var db = [];

	function showData(arr,str,tar){
		var result = "";
		var temp = _.template(str);
		for(var i in arr) {
			result += temp(arr[i]);
		}
		$(tar).html(result);
	}
	function showNeighborhood(db){
		showData(
			db,
			$("#neighborhood-info-template").html(),
			"#neighborhood-info-container"
		);
	}

	$.ajax({
		url:"js/data.json",
		dataType:"json"
	}).fail(function( jqXHR, textStatus ) {
	  console.log( "Request failed: " + textStatus );
	}).done(function(d){
		console.log("success", d);
		db = d;
		//showNeighborhood(db);
	})

	$("body").on("click", nhoods, function(){
		//console.log($(this).data());
		$(".active").removeClass("active");
		$(this).addClass("active");
		showData(
			[db[$(this).data("index")]],
			$("#neighborhood-info-template").html(),
			"#neighborhood-info-container"
		);
	})
});