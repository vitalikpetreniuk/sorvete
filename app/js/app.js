// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import "slick-carousel";

document.addEventListener('DOMContentLoaded', () => {

	$('.main-slider__container').slick({
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 5000,
	})

})
