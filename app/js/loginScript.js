var loginInput = document.querySelector('.login_input');
var loginConfirm = document.querySelector('.login_confirm');
var newUserForm = document.querySelector('.new_user');
var newUserConf = document.querySelectorAll('.new_user-conf');
var newUserYes = document.getElementById('new-user-yes');
var newUserNo = document.getElementById('new-user-no');

loginInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        loginConfirm.click();
    }
});
loginConfirm.addEventListener('click', logIn);

function logIn() {
    var username = loginInput.value;
    var userId;
    if (!userCheck(username)) { //returns false, if there is no user in database
        newUserForm.classList.add('active');
        for (var i = 0; i < newUserConf.length; i++) {
            newUserConf[i].addEventListener('click', newUserCheck);
        }

        function newUserCheck() {
            if (this.id === "new-user-yes") {
                addUser(username);
                changeUserQuery();
            } else if (this.id === "new-user-no") {
                newUserForm.classList.remove('active');
            }
        }
    } else {
        changeUserQuery();
    }

    function changeUserQuery() {
        usersObject = JSON.parse(localStorage.getItem('users'));
        userId = getIdbbyName(username);
        window.location = "?userid=" + userId;
    }
}


function userCheck(username) {
    for (key in usersObject) {
        if (usersObject[key].login == username) {
            return true;
        }
    }
    return false;
}

function getIdbbyName(username) {
    var id;
    for (key in usersObject) {
        if (usersObject[key].login == username) {
            id = key;
        }
    }
    return id;
}