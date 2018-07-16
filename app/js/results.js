var quizesObject = JSON.parse(localStorage.getItem('quizes'));
var currentQuiz;

function saveResults(score, total, time, type, answers) {
    var today = new Date();
    var dd = today.getDate();
    dd = dd.toString().length == 1 ? "0" + dd : dd;
    var mm = today.getMonth() + 1;
    var formatedMM = mm.toString().length == 1 ? "0" + mm : mm;
    var yyyy = today.getFullYear();
    var usersObject = JSON.parse(localStorage.getItem('users'));
    var newQuizId = "quizId" + generateId(quizesObject);
    var resObj = newQuizId === "quizId1" ? {} : quizesObject;
    usersObject[currentUser].quizes.push(newQuizId);
    resObj[newQuizId] = {
        type: type,
        score: score,
        total: total,
        userAnswers: answers,
        time: time,
        date: dd + "." + formatedMM + "." + yyyy
    }
    localStorage.setItem('quizes', JSON.stringify(resObj));
    localStorage.setItem('users', JSON.stringify(usersObject));
    showResults(newQuizId, currentUser);
}

function showResults(quizid, userid) {
    window.location = "report.html?userid=" + userid + "&quizid=" + quizid;
}