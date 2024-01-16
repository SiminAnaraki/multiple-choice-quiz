var startScreen = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#questions");
var startBtn = document.querySelector("#start");
var time = document.querySelector("#time");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var highscores = []
var seconds = 30;
var timeOver;

startBtn.addEventListener("click",startQuiz)
    function startQuiz(){
        time.textContent = seconds
            timeOver = setInterval(function(){
            if(seconds>0){
            seconds--
            time.textContent= seconds
            }
            else{ 
                time.textContent= seconds
                stop();
              }
                },1000);
                  

        startScreen.setAttribute("class","hide")
        questionScreen.classList.remove("hide")
        questionsFarm(i)
    } 
    submit.addEventListener("click",function(event){
        event.preventDefault()
        var userInput = initials.value;
        var namedScore = `${userInput} - ${finalScore.textContent}`
        highscores.push(namedScore)
        var forStore = JSON.stringify(highscores)
        localStorage.setItem("storedHighscore",forStore)
        window.location.assign("highscores.html")
    })
    function stop (){
        clearInterval(timeOver)
        questionScreen.classList.add("hide");
        endScreen.classList.remove("hide");
        finalScore.textContent = time.textContent;
    }


   
   