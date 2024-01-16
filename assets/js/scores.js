var highscores = document.querySelector("#highscores")
var clear = document.querySelector("#clear")
var storedArray = JSON.parse(localStorage.getItem("storedHighscores"))

//retrieve highscores array from localStorage
storedArray.map(function(each){
    var eachScore = document.createElement("li")
    eachScore.textContent = each
    highscores.append(eachScore)
})

clear.addEventListener("click",function(e){
    e.preventDefault();
    localStorage.removeItem("storedHighscores")
    highscores.textContent =""
})
