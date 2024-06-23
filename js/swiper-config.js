const swiper = new Swiper('.swiper', {
	clickedSlide: true,
	autoplay: {
		pauseOnMouseEnter: true,
		delay: 5000,
	},
	loop: true,
	initialSlide: 1,
	centeredSlides: true,
	slidesPerView: 3,
	spaceBetween: 30,
	speed: 400,
	// grabCursor: true,
	// pointerup: true,
	// clickable: true,
	preventClicks: false,
	preventClicksPropagation: false,
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
		prevEl: '.bullets-prev',
	},
});

const swiperBanner = new Swiper('.swiper-banner', {
	// grabCursor: true,
	// pointerup: true,
	clickedSlide: true,
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

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach(slide => {
        slide.addEventListener('click', function(event) {
            const link = this.querySelector('.sphere-back');
			if (link) {
				event.preventDefault();
                let url = link.href;
				if (url === undefined) {
					return;
				} else {
					window.open(url, '_blank'); // Abre o link em uma nova aba
				}
            }
        });
    });
});