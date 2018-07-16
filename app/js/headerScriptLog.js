var loginBtn = document.querySelector('.header_menu-link.log');
var loginForm = document.querySelector('.login_form');
var loginItem = document.querySelector('.header_menu-item.log');

loginBtn.addEventListener('click', function() {
    event.preventDefault();
    loginForm.classList.toggle('active');
    loginItem.classList.toggle('active');
})