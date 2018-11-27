var arrLang = {
	'en': {
		'nav-home': 'Home',
		'nav-about': 'History',
		'nav-portfolio': 'Portfolio',
		'nav-services': 'Services',
		'nav-prices': 'Prices', 
		'nav-team': 'Team',
		'nav-contact': 'Contacts',
		'nav-language': 'Language',
		'home-title': 'We are MITIO ELECTRONICS',
		'home-goal': "MITIO ELECTRONICS's goal is to become a leading technology company for intelligent IT solutions, expanding its electronics, telecommunications and smart devices business sector, as a global experienced developer and manufacturer in the industry.",
	},
	'ru': {
		'nav-home': 'Главная',
		'nav-about': 'История',
		'nav-portfolio': 'Портфолио',
		'nav-services': 'Сервисы',
		'nav-prices': 'Цены', 
		'nav-team': 'Команда',
		'nav-contact': 'Контакты',
		'nav-language': 'Язык',
		'home-title': 'Мы - MITIO ELECTRONICS',
		'home-goal': 'Цель MITIO ELECTRONICS - стать ведущей технологической компанией для интеллектуальных IT-решений,  расширив свой бизнес-сектор электроники, телекоммуникаций и смарт устройств, как мировой опытный разработчик и производитель в этой отрасли.',
	},
	'kz': {

	},
	'kor': {

	}
};


(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});

	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});


	$('.translate').click(function() {
		var lang = $(this).attr('id');
		$('.lang').each(function(index, element) {
			$(this).text(arrLang[lang][$(this).attr('key')]);﻿
		});
	});


	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		// wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		// wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});
})(jQuery);
