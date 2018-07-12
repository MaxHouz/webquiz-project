function saveResults(score, time) {
    var quizObject = {
        "id": 1,
        "score": score,
        "time": time
    }
    localStorage.setItem('quiz', JSON.stringify(quizObject));
}

function showResults() {
    //alert(localStorage.getItem('quiz'));
    window.location.pathname = "/report.html";
}