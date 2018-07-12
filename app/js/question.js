function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices; // [{id: 1,name: "Variat 1"},{id: 1,name: "Variat 1"}]
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}