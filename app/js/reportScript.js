var currentQuiz = window.location.search.split('=')[2];
var quizesObject = JSON.parse(localStorage.getItem('quizes'));
var currentQuizObject = quizesObject[currentQuiz];
console.log(currentQuiz);

var reportType = document.getElementById('report_type');
var reportScore = document.getElementById('report_score');
var reportTime = document.getElementById('report_time');
var detailsBtn = document.querySelector('.details_button');
var markupContainer = document.querySelector('.report_details');

detailsBtn.addEventListener('click', function() {
    markupContainer.classList.toggle('active');
    detailsBtn.classList.toggle('active');
    if (this.classList.contains("active")) {
        showDetails();
    } else {
        hideDetails();
    }
});

reportType.innerHTML = currentQuizObject.type;
reportScore.innerHTML = currentQuizObject.score + " of " + currentQuizObject.total;
reportTime.innerHTML = currentQuizObject.time;

var queryUrl;

switch (currentQuizObject.type) {
    case 'js':
        queryUrl = "json/jsQuestions.json";
        break;
    case 'html':
        queryUrl = "json/htmlQuestions.json";
        break;
    case 'css':
        queryUrl = "json/cssQuestions.json";
        break;
}
var questions = formQuestionList(queryUrl);

function createReportMarkup(i) {
    var questionText = '<div class="report_question-text"></div>';
    var userChoice = '<div class="user_choice">Your answer: <br></div>';
    var correctChoice = '<div class="correct_choice">Correct answer: <br></div>';

    var markupToCreate = '<li class="report_details-item">' + questionText + userChoice + correctChoice + '</li>';

    while (i > 0) {
        markupContainer.innerHTML += markupToCreate;
        i--;
    }
}

function initQuestionData(questions) {
    var text = document.querySelectorAll('.report_question-text');
    var answers = document.querySelectorAll('.user_choice');
    var correct = document.querySelectorAll('.correct_choice');
    for (var i = 0; i < questions.length; i++) {
        text[i].innerHTML = questions[i].text;
        answers[i].innerHTML += currentQuizObject.userAnswers[i];
        correct[i].innerHTML += questions[i].answer;
        if (currentQuizObject.userAnswers[i] == questions[i].answer) {
            answers[i].style.color = "green";
            correct[i].style.display = "none";
        } else {
            answers[i].style.color = "red";
        }
    }
}


function showDetails() {
    createReportMarkup(questions.length);
    initQuestionData(questions);
}

function hideDetails() {
    markupContainer.innerHTML = "";
}