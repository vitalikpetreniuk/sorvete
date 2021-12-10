// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import "slick-carousel";
import "jquery-mask-plugin";
import "jquery-validation"

document.addEventListener('DOMContentLoaded', () => {

	$('.main-slider__container').slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	})
	$('.info__slider').slick({
		infinite: false,
		slidesToShow: 1,
	})
	$('.products__slider').slick({
		slidesToShow: 4,
		infinite: false,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
		]
	})

	function checkWidth () {
		const windowWidth = $('body').innerWidth(),
			headerNav = $('.header__nav')

		if(windowWidth <= 991) {
			headerNav.addClass('mobile-nav')
		}
		else {
			headerNav.removeClass('mobile-nav')
		}
	}

	checkWidth();

	$(window).resize(() => {
		checkWidth();
	})
	
	$('.header__burger, .header__nav .close-menu, .mobile-nav ul li').on('click', () => {
		$('.header__nav').toggleClass('active')
		$('body').toggleClass('_over-hidden')
	})
	

	$('a[href^="#"]').click(function(){ 
		let anchor = $(this).attr('href');  
		$('html, body').animate({           
			scrollTop:  $(anchor).offset().top - 160
		}, 10);                           
	});

	$('#form-popup').validate({
		rules:{
			name:{
				required: true,
			},
			phone:{
				required: true,
				minlength: 16,
			},
		},
		messages:{
			name:{
				required: "Введите ваше имя",
			},
			phone:{
				required: "Это поле обязательно для заполнения",
				minlength: "Введите корректный номер",
			},
		}
	})

	$('#form-banner').validate({
		rules:{
			name2:{
				required: true,
			},
			phone2:{
				required: true,
				minlength: 16,
			},
		},
		messages:{
			name2:{
				required: "Введите ваше имя",
			},
			phone2:{
				required: "Это поле обязательно для заполнения",
				minlength: "Введите корректный номер",
			},
		}
	})
	
	$('.header__btn, .footer__btn, #popup-form .popup__close').click(() => {
		$('#popup-form, .bg-modal').toggleClass('active')
		$('body').toggleClass('_over-hidden')
	})


	$('.products__element').click(function(event) {
		event.preventDefault()
		event.stopPropagation()
		let popup_id = $('#' + $(this).attr("rel"));
		$(popup_id).addClass("active");
		$('body').addClass("_over-hidden");
		$('.bg-modal').addClass('active')
		console.log(popup_id)
		$('.modal__close, .bg-modal').on('click', function (e){
			$(".modal").removeClass("active");
			$("body").removeClass("_over-hidden");
			$('.bg-modal').removeClass('active')
		})
	})
	
	
	
	$('.bg-modal').click(() => {
		$('.modal, .popup, .bg-modal').removeClass('active')
		$('body').removeClass('_over-hidden')
	})

	$('#popup-form button').click((e) => {
		e.preventDefault()
		if ($('#form-popup').valid()) {
			$('#popup-form').removeClass('active')
			$('#popup-success').toggleClass('active')
		}
	})

	$('#popup-success .popup__close').click(() => {
		$('#popup-success').removeClass('active')
		$('body').removeClass('_over-hidden')
		$('.bg-modal').removeClass('active')
	})
	
	$('.form .btn-general').click((e) => {
		e.preventDefault()
		if ($('#form-banner').valid()) {
			$('#popup-success').toggleClass('active')
			$('.bg-modal').toggleClass('active')
			$('body').toggleClass('_over-hidden')
		}
	})

	$("#phone").mask("+7 999 999‒99‒99");
	$("#phone2").mask("+7 999 999‒99‒99");
	
})
