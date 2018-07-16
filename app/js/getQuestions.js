function readTextFile(file, callback) { //getQuizData 
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function formQuestionList(url) {
    var questionsString;
    readTextFile(url, function(text) {
        questionsString = JSON.parse(text);
    });
    var parsedQuestions = questionsString;
    var questionsArray = [];
    parsedQuestions.map(function(q) {
        questionsArray.push(new Question(q.questionText, q.choises, q.answer));
    })
    return questionsArray;
}

// readTextFile("jsonDB/htmlQuestions.json", function(text) {
//     var data = JSON.parse(text);
//     console.log(data);
// });