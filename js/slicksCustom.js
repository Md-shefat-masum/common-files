$(document).ready(function () {

    //    slick slider
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        preview: true,
        //vertical: true,
        nextArrow: ".slidNext",
        prevArrow: '.slidPrv',
		swipe: true,
		//cssEase: 'ease',
		easing: 'linear',
		
    });


});