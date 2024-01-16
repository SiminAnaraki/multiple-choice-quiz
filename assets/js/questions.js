var questionTitle = document.querySelector
("#question-title")
var choices = document.querySelector("#choices");
var eachResult = document.querySelector("#eachResult");
var showEachResult = document.querySelector("#showEachResult");
var questionScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var finalScore =document.querySelector("#final-score");
var i = 0;

//array of questions
var questions=[
    {title:"Commonly used datatypes Do Not Include:"},
    {title:"The condition in an if / else statement is enclosed with ______. "},
    {title:"Arrays in JavaScript can be used to store ________."},
    {title:"String values must be ecclosed within ______ when being assigned to variables."},
    {title:"A very useful tool used during development and debugging for printing content to the debugger is:"}]

//array of answers
var answers = [
    [["firstAnswer","1. string"],["secondAnswr","2. booleans"], ["correct","3. alerts"],["fourthAnswer","4. numbers"] ]
    ,
    [["firstAnswer","1. quotes"],["secondAnswer","2. curly brackets"],["correct","3. parenthesis"],["fourthAnswer","4. square brachets"]]
    ,
    [["firstAnswer","1. numbers and strings"],["secondAnswr","2. other arrays"],["thirdAnswer","3. booleans"],["correct","4. all of the above"]]
    ,
    [["firstAnswer","1. commas"],["secondAnswr","2. curly brackets"],["correct","3. quotes"],["fourthAnswer","4. parenthesis"]]
    ,
    [["firstAnswer","1. JavaScript"],["secondAnswr","2. terminal/bash"],["thirdAnswer","3. for loops"],["correct","4. console.log"]]
    ]

//function to display questions and answrs
function questionsFarm(i){
    questionTitle.textContent = questions[i].title
    for (var j = 0; j<answers[i].length; j++){
        var ansBtn = document.createElement("button")
        choices.append(ansBtn)
        ansBtn.textContent = answers[i][j][1]
        if(answers[i][j][0]==="correct"){
            ansBtn.setAttribute("data-test","correct")
        }
        else {ansBtn.setAttribute("data-test","wrong")}
    }

}

//event listener for uaer ckick on asnwers
choices.addEventListener("click",function(event){
    event.preventDefault();
    var element = event.target;
    if (element.matches("button")){
        showEachResult.classList.remove("hide")
        var userAns = element.getAttribute("data-test");
        eachResult.textContent = userAns 
        //check if user choice is wrong
        if(!(userAns=== "correct")){
            incorrectAudio.play()
            if(seconds>10){
            seconds = seconds - 10}
            else{
                seconds = 0
            }
        }
        //display next question or stop the quiz
        else {correctAudio.play()}
        if(i<questions.length-1){
            i++
            choices.textContent=""
            questionsFarm(i)
        }
            else {
            console.log(time.textContent)
            stop()   
            }
    }
})
//add Audio files
var correctAudio = new Audio("./assets/sfx/correct.wav")
var incorrectAudio = new Audio("./assets/sfx/incorrect.wav")
