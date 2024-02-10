var highScores = document.getElementById('highscores')

//   displayHighScores();
var listOfHighscores = JSON.parse(localStorage.getItem("userScores"))
console.log(listOfHighscores);

// Get all keys from local storage
for (var i = 0; i < listOfHighscores.length; i++) {
    let userEl = document.createElement("li");   // Create a new list item
    userEl.textContent = `${listOfHighscores[i].initials} ${listOfHighscores[i].score}`;  // Set the content of the userEl element
    highScores.appendChild(userEl);  // Append the list item to the list
}

// clear scores
var clearInterval = document.getElementById('clear');


function newFunction() {
    clearInterval(countdown);
}



// Pseudocode
// create some list items - initials, score. word guess activity for info document.createelements li
// Create an li element
// Append the li element to a parent element
// var ul = document.querySelector('highscores');
// highScores.appendChild(li);
// append list items to starter html