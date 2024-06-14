const swiper = new Swiper('.swiper', {
	speed: 400,
	spaceBetween: 0,
	loop: true,
	slidesPerView: 1,
    effect: 'fade',
    autoplay: {
        delay: 5000,
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
