var searchBtn = document.getElementById('search');
var searchInput = document.getElementById('search_input');
searchBtn.addEventListener('change', function() {
    searchInput.classList.toggle('active');
});


var jsQuiz = document.getElementById("js_quiz");
var htmlQuiz = document.getElementById("html_quiz");
var cssQuiz = document.getElementById("css_quiz");
var startBtn = document.querySelector(".quiz_start");

jsQuiz.addEventListener('click', quizChange);
htmlQuiz.addEventListener('click', quizChange);
cssQuiz.addEventListener('click', quizChange);
startBtn.addEventListener('click', quizLoad);

function quizChange() {
    var activeQuiz = document.querySelector(".quiz_choice.active");
    var quizTitle = document.querySelector(".quiz_info-title");
    var quizQuestions = document.querySelector(".quiz_info-questions");
    var quizTime = document.querySelector(".quiz_info-time");
    if (activeQuiz) activeQuiz.classList.remove("active");
    this.classList.add("active");
    switch (this.id) {
        case "js_quiz":
            quizTitle.innerHTML = "JavaScript Quiz";
            quizQuestions.innerHTML = "15 questions";
            quizTime.innerHTML = "Average time : 7 minutes";
            break;
        case "html_quiz":
            quizTitle.innerHTML = "HTML Quiz";
            quizQuestions.innerHTML = "20 questions";
            quizTime.innerHTML = "Average time : 6 minutes";
            break;
        case "css_quiz":
            quizTitle.innerHTML = "CSS Quiz";
            quizQuestions.innerHTML = "15 questions";
            quizTime.innerHTML = "Average time : 5 minutes";
            break;
    }
    startBtn.disabled = false;
}

function quizLoad() {
    var activeQuiz = document.querySelector(".quiz_choice.active");
    switch (activeQuiz.id) {
        case 'js_quiz':
            window.location.href = '/quiz.html?type=js';
            break;
        case 'html_quiz':
            window.location.href = '/quiz.html?type=html';
            break;
        case 'css_quiz':
            window.location.href = '/quiz.html?type=css';
            break;
    }
}