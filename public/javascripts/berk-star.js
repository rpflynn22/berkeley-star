$(window).ready(updateHeight);
$(window).resize(updateHeight);

$(document).ready(function() {

	$('img').click(function(){
        $("body").animate({
          scrollTop: 100
     });
   });
});

function updateHeight()
{
	//alert('here');
	var car = $('.carousel');
	var item = $('.carousel .item');
    var div = $('#dynamicheight');
    var width = car.width();
    if (width < 970) {
    	var height = Math.floor(width * .5);
    	$('.push-up').css('top', 0);
    	car.css('height', height);
    	item.css('height', height);
    } else if (width >= 970) {
    	car.css('height', 500);
    	item.css('height', 500);
    	$('.push-up').css('top', -200);
    }
    //alert(width);
    //div.css('height', width);
}