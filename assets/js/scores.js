var highScores = document.getElementById('highscores')
var storedScores = localStorage.getItem("userScores");
var listOfHighscores = storedScores ? JSON.parse(storedScores) : [];

//   displayHighScores();
console.log(listOfHighscores);

// Get all keys from local storage
for (var i = 0; i < listOfHighscores.length; i++) {
    let userEl = document.createElement("li");   // Create a new list item
    userEl.textContent = `${listOfHighscores[i].initials} ${listOfHighscores[i].score}`;  // Set the content of the userEl element
    highScores.appendChild(userEl);  // Append the list item to the list

}

// clear scores
var clearInterval = document.getElementById('clear');
clearInterval.addEventListener("click", clearScores)

function clearScores() {
    localStorage.removeItem("userScores");
    highScores.innerHTML = "";
}

