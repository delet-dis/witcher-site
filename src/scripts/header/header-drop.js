var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function(){
  console.log('Клик по кнопке');
  menu.classList.toggle('header-active');
}) 