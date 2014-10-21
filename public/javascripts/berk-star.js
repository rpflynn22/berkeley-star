$(window).ready(updateHeight);
$(window).resize(updateHeight);
$(document).ready(function() {
    var about = $('#about').offset().top;
    var philanthropy = $('#philanthropy').offset().top;
    var acts = $('#acts').offset().top;
    $(window).scroll(function() {
        var dist = $(window).scrollTop();
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            makeActive('acts-nav');
        }
        else if (dist >= acts - 10) {
            makeActive('acts-nav');
        } else if (dist >= philanthropy - 10) {
            makeActive('philanthropy-nav');
        } else if (dist >= about - 10) {
            makeActive('about-nav');
        } else {
            makeActive('home-nav');
        }
    });
});

function makeActive(idToActivate) {
    $('#home-nav, #philanthropy-nav, #about-nav, #acts-nav').removeClass('active');
    $('#' + idToActivate).addClass('active');
}   

function updateHeight()
{
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
}