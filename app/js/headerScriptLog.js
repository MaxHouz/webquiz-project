document.addEventListener('DOMContentLoaded', blockLogInForm);

var loginBtn = document.querySelector('.header_menu-link.log');
var loginForm = document.querySelector('.login_form');
var loginItem = document.querySelector('.header_menu-item.log');

function blockLogInForm() {
    if (currentUser === undefined) {
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault(event);
            loginForm.classList.toggle('active');
            loginItem.classList.toggle('active');
        })
    }
}