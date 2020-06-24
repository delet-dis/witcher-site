$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView:1,
    navigation: {
      nextEl: '.arrow'
    },
    breakpoints:{
      540:{
        slidesPerView:2,
        
      }
    }
  })
});