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
    questions.classList.remove("hide")
    startPage.classList.add("hide")
//     displayQuestionAndOptions();
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









