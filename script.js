const toggle = document.getElementById('toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

var swiper = new Swiper('.hero-swiper', {
    slidesPerView: 1,
    effect: 'fade',
    autoplay: {
        delay: 6000,
    },
})