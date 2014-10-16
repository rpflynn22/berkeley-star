$(window).ready(updateHeight);
$(window).resize(updateHeight);

function updateHeight()
{
	var car = $('.carousel');
	var item = $('.carousel .item');
    var div = $('#dynamicheight');
    var width = car.width();
    alert(width);
    //div.css('height', width);
}