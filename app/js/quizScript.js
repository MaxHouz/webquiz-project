var timer = document.getElementById("timer");
var time = new Timer(timer);

function initData() {
    if (quiz.finished()) {
        // timeStop stops the timer and returns time
        saveResults(quiz._score, time.timeStop());
        showResults();
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
switch (window.location.search) {
    case '?type=js':
        getQueryString = "json/jsQuestions.json"
        type = 'js';
        break;
    case '?type=html':
        getQueryString = "json/htmlQuestions.json"
        type = 'html';
        break;
    case '?type=css':
        getQueryString = "json/cssQuestions.json"
        type = 'css';
        break;

}

function formQuestionList() {
    var test;
    readTextFile(getQueryString, function(text) {
        test = JSON.parse(text);
    });
    var parsedQuestions = test;
    var questionsArray = [];
    parsedQuestions.map(function(q) {
        questionsArray.push(new Question(q.questionText, q.choises, q.answer));
    })
    return questionsArray;
}

var questions = formQuestionList();

var quiz = new Quiz(questions, '.btns_list', "css");

initData();
time.start();