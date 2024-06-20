const swiper = new Swiper('.swiper', {
	autoplay: {
		pauseOnMouseEnter: true,
		delay: 5000,
	},
	loop: true,
	grabCursor: true,
	initialSlide: 1,
	centeredSlides: true,
	slidesPerView: 3,
	spaceBetween: 30,
	speed: 400,
	// freeMode: false,
	// mousewheel: {
	// 	thresholdDelta: 30,
	//   },
	
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.bullets-next',
		// prevEl: '.swiper-button-prev',
		prevEl: '.bullets-prev',
	},
});

const swiperBanner = new Swiper('.swiper-banner', {
	grabCursor: true,
	speed: 400,
	// spaceBetween: 0,
	loop: true,
	slidesPerView: 1,
	effect: 'fade',
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: true,
	},
	fadeEffect: {
		crossFade: true,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const swiperBannerContainer = new Swiper('.swiper-banner-container', {
	autoplay: {
		delay: 5000,
		pauseOnMouseEnter: true,
	},
	grabCursor: true,
	speed: 900,
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	effect: 'coverflow',

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
