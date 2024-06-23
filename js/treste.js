const swiperTeste = new Swiper('.swiper-teste', {
	speed: 400,
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
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
		nextEl: '.swiper-button-next-bullets',
		prevEl: '.swiper-button-prev-bullets',
	},
});

