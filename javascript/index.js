var swiper = new Swiper(".swiperResidence", {
    slidesPerView:'auto',
    spaceBetween:2,
    slidesPerGroup:3,
    loop: true,
    grabCursor: true,
    centeredSlides:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });