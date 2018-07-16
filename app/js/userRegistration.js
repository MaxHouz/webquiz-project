var usersObject = JSON.parse(localStorage.getItem('users'));

function addUser(login) {
    var newUserId = "user" + generateId(usersObject);
    var resObj = newUserId === "user1" ? {} : usersObject;

    resObj[newUserId] = {
        login: login,
        quizes: []
    }
    localStorage.setItem('users', JSON.stringify(resObj));
}