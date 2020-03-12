var play = false;
var x = 15000;

$(function(){

	$("#vitesse").on('input',function(callback){
		x = (50000 / $(this).val()*10);
		$("output").val($(this).val());
	});



 var rotation = 0;

jQuery.fn.rotate = function(degrees) {
	 $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
	 return $(this);
};

$("#roue").hover(function() {
	 rotation += 50;
	 $(this).rotate(rotation);
});


$(document).keydown(function(e){
		switch(e.which) {
			case 32:
				deplacer("92%",x);
				break;
			case 37:
				deplacer("0%",x);
				break;
			case 39:
				deplacer("92%",x);
				break;
		}
	});

	$("#pp").click(function(callback){
		deplacer("92%",x);
	});

	$("#left").click(function(callback){
		deplacer("0%",x);

	});

	$("#right").click(function(callback){
		deplacer("92%",x);
	});


});
function deplacer(dist,x){
	if (!play) {
		$("#voiture").animate({left:dist},x,"linear");
		play = true;
	}
	else {
		$("#voiture").stop();
		play = false;
	}
}
