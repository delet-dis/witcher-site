var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function(){
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
  menu.classList.toggle('animate__fadeInDown');
}) 
