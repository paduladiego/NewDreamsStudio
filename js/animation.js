// import { RollTop } from './RollTop.js';

// window.onload = () => {
// 	let animaRollTop = new RollTop();
// 	document.addEventListener('scroll', animaRollTop.calculoScroll);
// };


document.addEventListener('DOMContentLoaded', function () {
    const swiperSlides = document.querySelectorAll('.swiper-slide');

    swiperSlides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            const h5 = slide.querySelector('h5');
            h5.classList.remove('animate-slide');
            void h5.offsetWidth; // Trigger reflow
            h5.classList.add('animate-slide');
        });

        // slide.addEventListener('mouseleave', () => {
        //     const h5 = slide.querySelector('h5');
        //     h5.classList.remove('animate-slide');
        // });
    });
});