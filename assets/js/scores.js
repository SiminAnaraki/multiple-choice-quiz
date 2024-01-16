var highscores = document.querySelector("#highscores")
var storedArray = JSON.parse(localStorage.getItem("storedHighscore"))
console.log(storedArray)
storedArray.map(function(each){
    var eachScore = document.createElement("li")
    eachScore.textContent = 
    highscores.append(eachScore)
})