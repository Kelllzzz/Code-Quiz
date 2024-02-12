var highScores = document.getElementById('highscores')
var storedScores = localStorage.getItem("userScores");
var listOfHighscores = storedScores ? JSON.parse(storedScores) : [];

//   displayHighScores();
console.log(listOfHighscores);

// Get all keys from local storage
for (var i = 0; i < listOfHighscores.length; i++) {
    let userEl = document.createElement("li");   // Create a new list item
    userEl.textContent = `${listOfHighscores[i].initials} ${listOfHighscores[i].score}`;  // Set the content of the userEl element
    //    Sort the high scores array in descending order by score
       listOfHighscores.sort(function (a, b) {
        if (a.score > b.score )
            return -1;
            if (a.score < b.score) {
                return 1;
            }
            if (listOfHighscores.indexOf(a) > listOfHighscores.indexOf(b) ) {
                return 1;
            }  
    });
    highScores.appendChild(userEl);  // Append the list item to the list
       
// Remove the lowest score if there are more than 5 high scores
if (listOfHighscores.length >  5) {
    listOfHighscores = listOfHighscores.slice(0,  5);
  }
}

// clear scores
var clearInterval = document.getElementById('clear');
clearInterval.addEventListener("click", clearScores)

function clearScores() {
    localStorage.removeItem("userScores");
    highScores.innerHTML = "";
}

