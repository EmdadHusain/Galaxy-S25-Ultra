$(document).ready(function () {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 3.5,
    spaceBetween: 20,
    centeredSlides: false,
    loop: false,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      // when window width is <= 320px
      0: {
        slidesPerView: 1,
      },
      // when window width is < 640px
      350: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      // when window width is < 768px
      630: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      // when window width is < 1024px
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      // when window width is >= 990px
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
    },
  });
});
