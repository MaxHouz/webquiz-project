document.addEventListener('DOMContentLoaded', logout);

function logout() {
    if (currentUser) {
        var logBtn = document.querySelector('.header_menu-link.log');
        logBtn.innerHTML = "Log out";

        logBtn.addEventListener('click', function(even) {
            even.preventDefault();
            var curUrl = window.location.pathname;
            window.location = curUrl.split('?')[0];
        })
    }
}