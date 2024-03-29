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

	$(".goTop").click(function(){
		$("html,body").animate({scrollTop:0},600);
		return false;
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
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});});