const toggle = document.getElementById('toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const swiper = new Swiper('.hero-swiper', {
    slidesPerView: 1,
    effect: 'fade',
    autoplay: {
        delay: 6000,
    },
})

const swiper2 = new Swiper('.projects-swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: true
});