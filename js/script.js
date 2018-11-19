$(document).ready(function() {


	$("#stream1_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});

	/*-----------------------Challenge I-----*/
	$("#aHTML").mouseenter(function() {
		$("#aHTML").removeClass("makeRed").addClass("makeBorder");
	});

	$("#aHTML").mouseleave(function() {
		$("#aHTML").removeClass("makeBorder").addClass("makeRed");
	});
	
	/*-----------------------Challenge II-----*/
	$("#aMySql").on("click",function() {
	    $("#pMySql").slideToggle("slow");
	});
	
	$("#aPython").on("click",function() {
	    $("#pPython").toggle("slow");
	})
	
	/*-----------------------Challenge III-----*/
	$("#ajQuery").on("click",function() {
	    $("#pjQuery").fadeToggle("slow");
	})
});
