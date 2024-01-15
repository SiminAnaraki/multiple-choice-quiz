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
    [["firstAnswer","string"],["secondAnswr","booleans"], ["corect","alerts"],["fourthAnswer","numbers"] ]
    ,
    [["firstAnswer","quotes"],["secondAnswr","curly brackets"],["corect","parenthesis"],["fourthAnswer","square brachets"]]
    ,
    [["firstAnswer","numbers and strings"],["secondAnswr","other arrays"],["thirdAnswer","booleans"],["corect","all of the above"]]
    ,
    [["firstAnswer","commas"],["secondAnswr","curly brackets"],["corect","quotes"],["fourthAnswer","parenthesis"]]
    ,
    [["firstAnswer","JavaScript"],["secondAnswr","terminal/bash"],["corect","fpr loops"],["fourthAnswer","console.log"]]
    ]
function questionsFarm(i){
    
      var ul = document.createElement("ul");
      ul.setAttribute("id","ul")
        choices.append(ul)
    questionTitle.textContent = questions[i].title
    for (var j = 0; j<answers[i].length; j++){
        var ansBtn = document.createElement("button")
        var li = document.createElement("li");
        li.append(ansBtn)
        ul.append(li);
        ansBtn.textContent = answers[i][j][1]
        if(answers[i][j][0]==="corect"){
            ansBtn.setAttribute("data-test","corect")
        }
        else {ansBtn.setAttribute("data-test","wrong")}
    }

    ul.addEventListener("click",function(event){
        event.preventDefault();
        showEachResult.classList.remove("hide")
        var element = event.target;
        if (element.matches("button")){
            var userAns = element.getAttribute("data-test");
            eachResult.textContent = userAns 
            if(!(userAns=== "corect")){
                seconds = seconds - 15
            }
            if(i<questions.length-1){
                i++
                choices.textContent=""
                questionsFarm(i)
            }
            else {
                clearInterval(timeOver)
                finalScore.textContent = time.textContent;
                questionScreen.classList.add("hide")
                endScreen.classList.remove("hide")    
            }
    }

})}
