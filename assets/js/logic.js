// assigning variables
var questions = document.getElementById('questions');
var startPage = document.getElementById('start-screen');
var timer = document.getElementById('time');
var choices = document.getElementById('choices')
var score = 0;
var currentIdx = 0;
var feedBack = document.getElementById('feedback')
var endScreen = document.getElementById('end-screen')
var endScore = document.getElementById('final-score')
var highScores = document.getElementById('highscores')

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
feedBack.classList.remove("hide")

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
                feedBack.textContent = "Correct!"
                displayQuestionAndOptions()
            } else {
                wrongAnswerAudio.play();
                feedBack.textContent = "Wrong!"
                count -= 10

                displayQuestionAndOptions()
            }
            // To clear feedback message
            setTimeout(() => {
                feedBack.classList.add("hide")
            }, 10000)

        });
        choices.appendChild(radioButton);
    }

}

// Quiz End action
function endQuiz() {
    endScreen.classList.remove("hide");
    questions.classList.add("hide");
    endScore.textContent = score;  // To display final score
    clearInterval(countdown);
}

// To store User initials
var submitbutton = document.getElementById("submit");
var userInitials = document.getElementById('initials');

submitbutton.addEventListener("click", function (event) {
    // Prevents the form from being submitted normally
    event.preventDefault();

    // Check the length of the input
    var initials = userInitials.value;
    if (initials.length > 3) {
        alert("Please enter max of 3 characters.");
    } else {
        console.log({ initials, score });
    }
    localStorage.setItem(initials, score);
})

// Convert the highScores array to a JSON string
var highScoresString = JSON.stringify(highScores);

// Store the JSON string in localStorage under the key 'highscores'
localStorage.setItem('highScores', highScoresString);

// Get the high scores from local storage
var HighScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Function to update high scores
function updateHighScores(newScore, initials) {
    // Create a new high score object
    var newHighScore = {
        score: newScore,
        initials: initials,
    };

    // Add the new high score to the high scores array
    HighScoresighScores.push(newHighScore);

    // Sort the high scores array in descending order by score
    HighScoresighScores.sort(function (a, b) {
        return b.score - a.score;
    });

    // Remove the lowest score if there are more than 5 high scores
    if (HighScoresighScores.length > 5) {
        HighScores.pop();
    }
}

