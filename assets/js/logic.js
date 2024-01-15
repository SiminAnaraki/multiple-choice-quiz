var startScreen = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#questions");
var startBtn = document.querySelector("#start");
var time = document.querySelector("#time");
var seconds = 75
var timeOver

startBtn.addEventListener("click",startQuiz)
    function startQuiz(){
        time.textContent = seconds
            timeOver = setInterval(function(){
            if(seconds>0){
            seconds--
            time.textContent= seconds
            }
            else{ 
                clearInterval(timeOver)
                questionScreen.classList.add("hide")
                endScreen.classList.remove("hide")}
                },1000);
                  

        startScreen.setAttribute("class","hide")
        questionScreen.classList.remove("hide")
        questionsFarm(i)
       
    } 
   
   