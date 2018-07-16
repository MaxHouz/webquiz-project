var scoresTitle = document.querySelector('.scores_section-title');
var scoresContainer = document.querySelector('.scores_quizes-list');
var usersObject = JSON.parse(localStorage.getItem('users'));
var currentUserObject = usersObject[currentUser];
var userQuizes = currentUserObject.quizes;
var quizesObject = JSON.parse(localStorage.getItem('quizes'));
scoresTitle.innerHTML = currentUserObject.login + "'s quiz results";



function createScoresMarkup(i) {
    var quizCount = '<div class="quiz_count"></div>';
    var quizType = '<div class="quiz_type"></div>';
    var quizScore = '<div class="quiz_score">Score: </div>'
    var quizDate = '<div class="quiz_date">Date: </div>';

    var markupToCreate = '<li class="quiz_item">' + quizCount + quizType + quizScore + quizDate + '</li>';

    while (i > 0) {
        scoresContainer.innerHTML += markupToCreate;
        i--;
    }
}

function initScoresData(quizes) {
    var count = document.querySelectorAll('.quiz_count');
    var type = document.querySelectorAll('.quiz_type');
    var score = document.querySelectorAll('.quiz_score');
    var date = document.querySelectorAll('.quiz_date');
    var scoreItems = document.querySelectorAll('.quiz_item');

    for (var i = 0; i < quizes.length; i++) {
        count[i].innerHTML = i + 1;
        type[i].innerHTML = quizesObject[quizes[i]].type;
        score[i].innerHTML += quizesObject[quizes[i]].score;
        date[i].innerHTML += quizesObject[quizes[i]].date;
        scoreItems[i].addEventListener('click', goToQuizReport);
    }
}

createScoresMarkup(userQuizes.length);
initScoresData(userQuizes);

function goToQuizReport() {
    var chosenQuizIndex = this.querySelector('.quiz_count').innerHTML;
    window.location = "report.html?userid=" + currentUser + "&quizid=quizId" + chosenQuizIndex;
}