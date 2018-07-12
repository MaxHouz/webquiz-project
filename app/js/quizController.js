function Quiz(questions, containerSelector, type) { // types [js, html, css]
    this.type = type;
    this._score = 0;
    this._questionIndex = 0;
    this.questions = questions;
    this.container = document.querySelector(containerSelector);
}

Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this._questionIndex];
}

Quiz.prototype.finished = function() {
    return this.questions.length === this._questionIndex;
}

Quiz.prototype.check = function(answer) {
    if (this.getCurrentQuestion().correctAnswer(answer)) {
        this._score++;
        console.log("Correct");
        console.log(this._score);
    }
    this._questionIndex++;
}

Quiz.prototype.renderCurrentQuestion = function() {
    var markupToCreate = '';
    var choiceCounter = 0;
    this.questions[this._questionIndex].choices.map(function(q) {
        markupToCreate += '<li class="quiz_btn" id="choice' + choiceCounter + '"></li>';
        choiceCounter++;
    })
    this.container.innerHTML = markupToCreate;

    var choice0 = document.getElementById('choice0');
    var choice1 = document.getElementById('choice1');
    var choice2 = document.getElementById('choice2');
    var choice3 = document.getElementById('choice3');

    if (choice0) choice0.addEventListener('click', answerChange);
    if (choice1) choice1.addEventListener('click', answerChange);
    if (choice2) choice2.addEventListener('click', answerChange);
    if (choice3) choice3.addEventListener('click', answerChange);

}

function answerChange() {
    var deActive = document.querySelector('.quiz_btn.active');
    if (deActive) {
        deActive.classList.remove('active');
    }
    this.classList.toggle('active');
    document.getElementById('confirm').disabled = false;
}