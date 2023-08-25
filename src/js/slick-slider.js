// Highlight Slider
$(document).ready(function () {
	$('.banner-slider').slick({
		dot: false,
		arrows: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 890,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dot: false,
					arrows: false,
				},
			},
			{
				breakpoint: 690,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dot: false,
					arrows: false,
				},
			},
		],
	});
});

// Read Section Slider
$(document).ready(function () {
	$('#read-slider').slick({
		dot: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoPlaySpeed: 1000,
		prevArrow: $('#read-slider-prev-btn'),
		nextArrow: $('#read-slider-next-btn'),
	});
});

// Event Section Slider
$(document).ready(function () {
	$('#event-slider').slick({
		dot: false,
		arrows: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dot: false,
					arrows: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dot: false,
					arrows: false,
				},
			},
			{
				breakpoint: 690,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dot: false,
					arrows: false,
				},
			},
		],
	});
});

// Watch Section Slider
$(document).ready(function () {
	$('#watch-slider').slick({
		dot: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoPlaySpeed: 1000,
		prevArrow: $('#watch-slider-prev-btn'),
		nextArrow: $('#watch-slider-next-btn'),
	});
});

// Learn Section Slider
$(document).ready(function () {
	$('#learn-slider').slick({
		dot: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoPlaySpeed: 1000,
		prevArrow: $('#learn-slider-prev-btn'),
		nextArrow: $('#learn-slider-next-btn'),
	});
});

// Social Section Slider
$(document).ready(function () {
	$('#social-slider').slick({
		dot: false,
		arrows: false,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoPlaySpeed: 1000,
		asNavFor: '.modal-slider',
		focusOnSelect: true,
		centerMode: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},

			{
				breakpoint: 690,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
});

// Modal Slider
$(document).ready(function () {
	$('.modal-slider').slick({
		dot: false,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		asNavFor: '#social-slider',
		prevArrow: $('.modal-slider-btn.prev'),
		nextArrow: $('.modal-slider-btn.next'),
	});
});
