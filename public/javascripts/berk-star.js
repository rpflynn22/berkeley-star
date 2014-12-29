$(window).resize(updateHeight);
$(document).ready(function() {
    var path = window.location.pathname;
    if (path == '/') {
        activeNavTabs();
    } else if (path == '/sponsors') {
        makeActive('sponsors-nav');
    }
});

function makeActive(idToActivate) {
    $('#home-nav, #philanthropy-nav, #about-nav, #2014-nav, #acts-nav, #fund-me, #tickets-nav, #sponsors-nav, #staff-nav').removeClass('active');
    $('#' + idToActivate).addClass('active');
}

function activeNavTabs() {
    var about = $('#about').offset().top;
    var philanthropy = $('#philanthropy').offset().top;
    var acts = $('#acts').offset().top;
    updateHeight();
    $(window).scroll(function() {
        var dist = $(window).scrollTop();
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            makeActive('acts-nav');
        }
        else if (dist >= acts - 30) {
            makeActive('acts-nav');
        } else if (dist >= philanthropy - 30) {
            makeActive('philanthropy-nav');
        } else if (dist >= about - 30) {
            makeActive('about-nav');
        } else {
            makeActive('home-nav');
        }
    });
}

function adjustSlideMargins() {
    var grantWinningHeight = $('.carousel').height();
    var grantWinningWidth = Math.floor(grantWinningHeight * (2048 / 968));
    $("#grant-winning").css('width', grantWinningWidth);
    var pageWidth = $('body').width();
    var grantMarginLeft = Math.floor(pageWidth / 2) - Math.floor(grantWinningWidth / 2);
    $('#grant-winning').css('margin-left', grantMarginLeft);
    var videoWidth = $('#music-video').width();
    var videoMarginLeft = Math.floor(pageWidth / 2) - Math.floor(videoWidth / 2);
    $('#music-video').css('margin-left', videoMarginLeft);
    var bgFeaturetteHeight = $('#bg-check').parent().parent().height();
    var bgCheckImageHeight = $('#bg-check').height();
    if (bgCheckImageHeight == 0) {
        bgCheckImageHeight = 369;
    }
    var bgCheckMarginTop = Math.floor(bgFeaturetteHeight / 2) - Math.floor(bgCheckImageHeight / 2);
    $('#bg-check').css('margin-top', bgCheckMarginTop);
    return;
}

function updateHeight()
{
    adjustSlideMargins();
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