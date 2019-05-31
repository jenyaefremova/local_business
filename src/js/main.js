var button = document.querySelector('#navbarButton');
var menu = document.querySelector('#navbarMenu');

button.addEventListener('click', function() {
  menu.classList.add("navbar-block__menu_active");
});
menu.addEventListener('mouseleave', function() {
  menu.classList.remove("navbar-block__menu_active");
});
