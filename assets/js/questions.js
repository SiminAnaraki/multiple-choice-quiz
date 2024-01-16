var questionTitle = document.querySelector
("#question-title")
var choices = document.querySelector("#choices");
var eachResult = document.querySelector("#eachResult");
var showEachResult = document.querySelector("#showEachResult");
var questionScreen = document.querySelector("#questions");
var endScreen = document.querySelector("#end-screen");
var finalScore =document.querySelector("#final-score")
var i = 0
var questions=[
    {title:"Commonly used datatypes Do Not Include:"},
    {title:"The condition in an if / else statement is enclosed with ______. "},
    {title:"Arrays in JavaScript can be used to store ________."},
    {title:"String values must be ecclosed within ______ when being assigned to variables."},
    {title:"A very useful tool used during development and debugging for printing content to the debugger is:"}]
var answers = [
    [["firstAnswer","1. string"],["secondAnswr","2. booleans"], ["corect","3. alerts"],["fourthAnswer","4. numbers"] ]
    ,
    [["firstAnswer","1. quotes"],["secondAnswr","2. curly brackets"],["corect","3. parenthesis"],["fourthAnswer","4. square brachets"]]
    ,
    [["firstAnswer","1. numbers and strings"],["secondAnswr","2. other arrays"],["thirdAnswer","3. booleans"],["corect","4. all of the above"]]
    ,
    [["firstAnswer","1. commas"],["secondAnswr","2. curly brackets"],["corect","3. quotes"],["fourthAnswer","4. parenthesis"]]
    ,
    [["firstAnswer","1. JavaScript"],["secondAnswr","2. terminal/bash"],["corect","3. for loops"],["fourthAnswer","4. console.log"]]
    ]
function questionsFarm(i){
    questionTitle.textContent = questions[i].title
    for (var j = 0; j<answers[i].length; j++){
        var ansBtn = document.createElement("button")
        choices.append(ansBtn)
        ansBtn.textContent = answers[i][j][1]
        if(answers[i][j][0]==="corect"){
            ansBtn.setAttribute("data-test","corect")
        }
        else {ansBtn.setAttribute("data-test","wrong")}
    }
choices.addEventListener("click",function(event){
    event.preventDefault();
    var element = event.target;
    if (element.matches("button")){
        showEachResult.classList.remove("hide")
        var userAns = element.getAttribute("data-test");
        eachResult.textContent = userAns 
        if(!(userAns=== "corect")){
            if(seconds>15){
            seconds = seconds - 15}
            else{
                seconds = 0
            }
        }
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

})}

