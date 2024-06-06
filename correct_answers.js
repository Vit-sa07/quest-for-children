const answers = {
    "question1": "javascript",
    "question2": "console.log"
};

function checkAnswer(question, answer) {
    return answers[question] && answers[question].toLowerCase() === answer.toLowerCase();
}
