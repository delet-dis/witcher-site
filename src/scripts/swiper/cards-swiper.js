$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView:2,
    spaceBetween:25,
    navigation: {
      nextEl: '.arrow'
    },
  })
});