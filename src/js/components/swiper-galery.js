import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.galery__swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  initialSlide: 0,

  breakpoints: {
    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      simulateTouch: true,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      simulateTouch: true,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
      simulateTouch: true,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 25,
      simulateTouch: true,
    },
  }

});

jQuery('.swiper-slide__wrap').hover(function () {
  jQuery(this).addClass('slide-hover');
}, function () {
  jQuery(this).removeClass('slide-hover');
});

document.querySelectorAll('.swiper-slide__wrap-hover').forEach(e => {
  e.addEventListener('click', () => {
    e.classList.add('slide-active');
  });
  // e.addEventListener('outside', () => {
  //   e.classList.remove('slide-active');
  // })
});
