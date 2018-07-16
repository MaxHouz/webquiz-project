var searchBtn = document.getElementById('search');
var searchInput = document.getElementById('search_input');
searchBtn.addEventListener('change', function() {
    searchInput.classList.toggle('active');
});

// var loginBtn = document.querySelector('.header_menu-link.log');
// var loginForm = document.querySelector('.login_form');
// var loginItem = document.querySelector('.header_menu-item.log');

// loginBtn.addEventListener('click', function() {
//     event.preventDefault();
//     loginForm.classList.toggle('active');
//     loginItem.classList.toggle('active');
// })

var userElems = document.querySelectorAll('.user');
var fastLinks = document.querySelectorAll('.quizes_dropdown-link');
var menuItems = document.querySelectorAll('.header_menu-link');

queryArray = window.location.search.split('&');
currentUser = queryArray[0].split('=')[1];
if (currentUser) {
    for (var j = 0; j < menuItems.length; j++) {
        menuItems[j].href = formLink(menuItems[j].href, currentUser);
    }
    for (var i = 0; i < fastLinks.length; i++) {
        fastLinks[i].href = formLink(fastLinks[i].href, currentUser);
    }
} else {
    for (var i = 0; i < userElems.length; i++) {
        userElems[i].addEventListener('click', function(event) {
            event.preventDefault();
            showLogInForm();
        })
    }
}