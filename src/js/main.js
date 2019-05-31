var button = document.querySelector('#navbar-button');
var menu = document.querySelector('#navbar-menu');

button.addEventListener('click', function() {
  menu.classList.add("navbar-block__menu_active");
});
