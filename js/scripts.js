
$(document).ready(function(){
	$("#gallery").unitegallery();
	$('.datepicker').datepicker();
});

$("#toggle").click(function(){
		$(this).toggleClass("on");
		$(".wrapper").slideToggle();
	});