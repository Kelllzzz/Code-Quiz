// assigning variables
var questions = document.getElementById("questions");
var startPage = document.getElementById("start-screen");
var timer = document.getElementById('time');
var choices = document.getElementById('choices')
var score = 0;
var currentIdx = 0;
var endScreen = document.getElementById("end-screen")
var endScore = document.getElementById('final-score')

//function to start the quiz
function startProcess() {
    console.log("Start button was clicked!");
    questions.classList.remove("hide");
    startPage.classList.add("hide");
    displayQuestionAndOptions();
}
var button = document.getElementById("start");
button.addEventListener("click", startProcess, false);

var countdown;
var count = 75; // Sets the countdown time

document.getElementById("start").addEventListener("click", function () {
    countdown = setInterval(function () {
        count--;
        document.getElementById("time").innerText = count;

        if (count <= 0) {
            endQuiz()
            document.getElementById("time").innerText = "You're out of Time!";
        }
    }, 1000);
});

// audio prompts for correct and wrong answers
let correctAnswerAudio = new Audio("./assets/sfx/correct.wav");
let wrongAnswerAudio = new Audio("./assets/sfx/incorrect.wav");

// To display questions and options
function displayQuestionAndOptions() {
    if (currentIdx === quizData.length) {
        endQuiz()
        return
    }
    var currentQuiz = quizData[currentIdx];
    var Question = document.getElementById("question-title")
    Question.innerHTML = currentQuiz.Question;
    choices.innerHTML = ""

    for (var i = 0; i < currentQuiz.options.length; i++) {
        var radioButton = document.createElement('button');
        radioButton.textContent = currentQuiz.options[i];
        radioButton.addEventListener('click', function (event) {
            currentIdx++
            if (event.target.textContent == currentQuiz.answer) {
                score++;
                correctAnswerAudio.play();
                displayQuestionAndOptions()
            } else {
                wrongAnswerAudio.play();
                count -= 10
                displayQuestionAndOptions()
            }

        });
        choices.appendChild(radioButton);
    }

}
// Quiz End action
function endQuiz() {
    endScreen.classList.remove("hide")
    questions.classList.add("hide")
    endScore.textContent = score
    clearInterval(countdown)
}







