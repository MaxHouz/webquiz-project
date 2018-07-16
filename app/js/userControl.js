var currentUser;
document.addEventListener('DOMContentLoaded', userControl);

function userControl() {
    var quizStart = document.querySelector('.quiz_start');
    var loginAnchor = document.querySelector('.login_anchor');

    queryArray = window.location.search.split('&');
    currentUser = queryArray[0].split('=')[1];
    if (!currentUser) {
        quizStart.style.display = "none";
        loginAnchor.style.display = "block";
        loginAnchor.addEventListener('click', showLogInForm)
    }

}

function formLink(link, id) {
    var newLink;
    var linkArr;
    if (link.indexOf('#') == -1) {
        linkArr = link.split("?");
        newLink = linkArr[0] + "?userid=" + id + (linkArr[1] ? "&" + linkArr[1] : "");
    } else {
        if (link.indexOf("userid") == -1) {
            {
                linkArr = link.split('#');
                newLink = linkArr[0] + "?userid=" + id + "#" + linkArr[1];
            }
        } else {
            linkArr = link.split("#");
            newLink = "#" + linkArr[1];
        }
    }
    return newLink;
}

function showLogInForm() {
    loginForm.classList.add('active');
    loginItem.classList.add('active');
}