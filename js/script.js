/*global $,document,window */

$(document).ready(function () {
	var items = $('.overlapblackbg, .slideLeft');
	var wsmenucontent = $('.wsmenucontent');
	var menuopen = function() {
		$(items).removeClass('menuclose').addClass('menuopen');
		$('body').addClass('overflow-hidden');
	}
	var menuclose = function() { 
		$(items).removeClass('menuopen').addClass('menuclose');
		$('body').removeClass('overflow-hidden');
	}
	$('#navToggle').click(function(){
		if (wsmenucontent.hasClass('menuopen')) {$(menuclose)}
		else {$(menuopen)}
	});
	wsmenucontent.click(function(){
		if (wsmenucontent.hasClass('menuopen')) {$(menuclose)}
	});
	$('#navToggle,.overlapblackbg').on('click', function(){
		$('.wsmenucontainer').toggleClass( "mrginleft" );
	});
	
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		
		if(scrollTop>50){
			$('body').addClass('scroll');
		}else{
			$('body').removeClass('scroll');
		}
	});

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop>800){
			$('.goTop').show();
		}else{
			$('.goTop').hide();
		}
	});
	new WOW().init();

	$(".slider_prd").slick({
		dots: false,
		infinite: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 8500,
		cssEase: "linear",
		pauseOnHover: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		{
		breakpoint: 1280,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
		}
		},
		{
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		}
		},
		{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
		}
	]
	});

	$('.gallery').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 7000,
		cssEase: "linear",
		arrows: false,
		dots: false,
		pauseOnHover: false,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}, {
			breakpoint: 520,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
});