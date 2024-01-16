var startScreen = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#questions");
var startBtn = document.querySelector("#start");
var time = document.querySelector("#time");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var timeOver;

//set timer start value
var seconds = 75;

//array to store highscores
var highscores = JSON.parse(localStorage.getItem("storedHighscores"))
if (!highscores){
    highscores=[]
}

//event listener for the start the quiz
startBtn.addEventListener("click",startQuiz)
    function startQuiz(){
        time.textContent = seconds

        //start the countdown timer
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
    //event listener for the Submit button
    submit.addEventListener("click",function(event){
        event.preventDefault()
        var userInput = initials.value.trim();
        if(userInput.length>3){
            alert("Please input max 3 charctor")
        }
        else {
        var namedScore = `${userInput} - ${finalScore.textContent}`
        highscores.push(namedScore)
        localStorage.setItem("storedHighscores",JSON.stringify(highscores))
        window.location.assign("highscores.html")
    }})
    //function to stop the quiz
    function stop (){
        clearInterval(timeOver)
        questionScreen.classList.add("hide");
        endScreen.classList.remove("hide");
        finalScore.textContent = time.textContent;
    }


   
   