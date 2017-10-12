$(document).ready(function(){
	$("#hidden").hover(function(){  ////if i hover over hidden, do
		$(this).css("color", "black"); // this code
	},                     //notice comma (conditional)
	function(){	 
	    $(this).hide();  //stop hovering over hidden thing for this
/*or this*/// $(this).css("display", "none");  
	});                  
	$("button").click(function(){
		alert("You should know something");
	})
});