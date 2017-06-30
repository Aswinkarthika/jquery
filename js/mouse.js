$(document).ready(function(){
	$("h1").hover(function(){
		alert("you enter to the paragraph");

	});
	$("h1").blur(function(){
		alert("you left the paragraph");
	});
});