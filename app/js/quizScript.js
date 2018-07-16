var timer = document.getElementById("timer");
var time = new Timer(timer);
var titleContainer = document.querySelector(".quiz_title-text");
var picContainer = document.querySelector(".quiz_title-pic");

function initData() {
    if (quiz.finished()) {
        // timeStop stops the timer and returns time
        saveResults(quiz._score, quiz.questions.length, time.timeStop(), quiz._type, quiz._answers);
    } else {
        quiz.renderCurrentQuestion();
        var totalQuestions = document.querySelector(".total-questions");
        totalQuestions.innerHTML = quiz.questions.length;
        var questionText = document.querySelector('.question_text');
        questionText.innerHTML = quiz.getCurrentQuestion().text;
        var choices = quiz.getCurrentQuestion().choices;
        choices.map(function(c) {
            var currentQuestion = document.getElementById('choice' + c.id);
            currentQuestion.innerHTML = c.variant;
        })
        choiceConfirm();
        showProgress();
    }
}

function choiceConfirm() {
    var confirmBtn = document.getElementById('confirm');
    confirmBtn.onclick = function() {
        var choice = document.querySelector(".quiz_btn.active");
        quiz._answers.push(choice.innerHTML);
        quiz.check(choice.innerHTML);
        initData();
        confirmBtn.disabled = true;
    }
}

function showProgress() {
    var currentQuestionNumber = quiz._questionIndex + 1;
    var currentQuestion = document.querySelector(".current-question");
    currentQuestion.innerHTML = currentQuestionNumber;
}


var getQueryString;
var type;
var quizDetect = window.location.search.split('&')[1];
switch (quizDetect) {
    case 'type=js':
        getQueryString = "json/jsQuestions.json";
        type = 'js';
        titleContainer.innerHTML = "JavaScript";
        picContainer.src = "img/quiz-logos/js.png";
        break;
    case 'type=html':
        getQueryString = "json/htmlQuestions.json";
        type = 'html';
        titleContainer.innerHTML = "HTML";
        picContainer.src = "img/quiz-logos/html.png";
        break;
    case 'type=css':
        getQueryString = "json/cssQuestions.json";
        type = 'css';
        titleContainer.innerHTML = "CSS";
        picContainer.src = "img/quiz-logos/css.png";
        break;

}

var questions = formQuestionList(getQueryString);

var quiz = new Quiz(questions, '.btns_list', type);

initData();
time.start();