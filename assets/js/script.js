

let gameTimeEL = document.querySelector("#game-time");

let containerEL = document.querySelector("#container");

let secondsLeft = 10;

let questionArray = [
    ({
        qText: "Some question here1",
        answer: [
            "1. Answer11", 
            "2. Answer21", 
            "3. Answer31", 
            "4. Answer41" 
        ],
        correctAnswer: "2"
    }),
    ({
        qText: "Some question here2",
        answer: [
             "1. Answer12", 
             "2. Answer22", 
             "3. Answer32", 
             "4. Answer42" 
        ],
        correctAnswer: "3"
    }),
    ({
        qText: "Some question here3",
        answer: [
             "1. Answer13", 
             "2. Answer23", 
             "3. Answer33", 
             "4. Answer43" 
        ],
        correctAnswer: "1"
    }),
    ({
        qText: "Some question here4",
        answer: [
             "1. Answer14", 
             "2. Answer24", 
             "3. Answer34", 
             "4. Answer44" 
        ],
        correctAnswer: "4"
    })
];
// let questionObjectOne = 

// let questionObjectTwo = 

// let questionObjectThree = 

// let questionObjectFour = 
// init() function to add starter game interface
function init(){
    console.log(`work`)

    let h3 = document.createElement("h3");
    h3.textContent = `Coding Quiz Challenge`;
    containerEL.appendChild(h3);

    let p1 = document.createElement("p");
    p1.innerHTML = `Try to answer the following code-related questions whithin the time limit. <br/>  Keep in mind that incorrect answers will penalize your score/time by ten seconds`;
    containerEL.appendChild(p1);

    let newButton = document.createElement("button");
    newButton.textContent = `Start Quiz`;
    newButton.setAttribute("id", "start-button")
    containerEL.appendChild(newButton);
}
init();


let startButtonEL = document.querySelector("#start-button");

// Timer that count down from starting point to 0. Amd show it to main screen
 function setTime() {
    
    let timerInterval = setInterval(function(){
        secondsLeft--;
        gameTimeEL.textContent = ` ${secondsLeft}`;
        
        if(secondsLeft === NaN){
            // gameTimeEL.textContent = NaN;
            clearInterval(timerInterval);
            gameTimeEL.classList.add("hidden");
        }
    
        if(secondsLeft <= 0) {
            let h4 = document.querySelector("h4");
            clearInterval(timerInterval);
            removeQuestion();
            addFinalScreen();
            h4.classList.add("hidden");
            // h4.textContent = '';
            // gameTimeEL.textContent = `0`
        }
       
    }, 1000);
}

// Create new buttons
// function to change screen with quiz question and buttons

//remove main screen
function removeScreen() {
    let pOld = document.querySelector("p");
    let buttonOld = document.querySelector("#start-button");
    containerEL.removeChild(pOld);
    containerEL.removeChild(buttonOld);
}

// add new screen
function quizQuestion(text) {
    let h3 = document.createElement("h3");
    let h3old = document.querySelector("h3");
    h3.textContent = `${text}`;
    containerEL.replaceChild(h3, h3old);
    };

// function to add question answer
function quizAnswers(text) {
    let button = document.createElement("button");
    button.textContent = `${text}`;
    button.setAttribute('class', `button`);
    containerEL.appendChild(button);
}

function changeButtonsAnswers(question) {
    let button = document.querySelectorAll("button");
    for(let i = 0; i <question.length; i++) {
        containerEL.removeChild(button[i]);
        }
}


function addScreen(question){
    containerEL.setAttribute("id", "question-container")
    quizQuestion(question.qText);
    let h4 = document.createElement("h4");
    h4.setAttribute("class", "text-win-lose");
    h4.textContent = "";
    containerEL.appendChild(h4);
// for logic to add all question text
    for(let i = 0; i <question.answer.length; i++) {
    quizAnswers(question.answer[i]);
    }
    
};

function changeScreen(question) {
    quizQuestion(question.qText);
    changeButtonsAnswers(question.answer);
    for(let i = 0; i <question.answer.length; i++) {
        quizAnswers(question.answer[i]);
        }
}

function winCheckText() {
    let h4 = document.createElement("h4");
    let h4old = document.querySelector("h4");
    h4.textContent = `Correct ✅`;
    containerEL.replaceChild(h4, h4old);
    };

    function loseCheckText() {
        let h4 = document.createElement("h4");
        let h4old = document.querySelector("h4");
        h4.textContent = `Wrong ❌`;
        containerEL.replaceChild(h4, h4old);
        };
//  Event listener for button's answers for quiz question
function checkAnswer(question){
// let buttonEL = document.querySelector(".container");
//     buttonEL.addEventListener("click", function(event)
    let buttonEL = document.querySelectorAll("button");
    for(i = 0; i < buttonEL.length; i++){
    buttonEL[i].addEventListener("click", function(event)
    {
    console.log(`click2`)
    event.stopPropagation();
    // if (event.target.matches(".button")){
        console.log('click');
    let element = event.target;
    text = element.textContent.split("");
    
    console.log('1');
    
    if(text[0] === question.correctAnswer) {
        
        
        secondsLeft = secondsLeft + 10;
        gameTimeEL.textContent = ` ${secondsLeft}`;
        changeScreen(questionArray[1]);
        winCheckText();
        question2(questionArray[1]);
        
        // clearInterval(timerIntercal);
        
    } else {
        
        secondsLeft = secondsLeft - 5;
        gameTimeEL.textContent = ` ${secondsLeft}`;
        changeScreen(questionArray[1]);
        loseCheckText();
        question2(questionArray[1]);
        
        // clearInterval(timerIntercal);
        
    }

    })
}}

// let buttonEL = document.querySelectorAll("button");
// for(i = 0; i < buttonEL.length; i++){
//     buttonEL[i].addEventListener("click", function(event)
// }

function question2(question){
    // let buttonEL = document.querySelector(".container");
    // buttonEL.addEventListener("click", function(event)
    let buttonEL = document.querySelectorAll("button");
    for(i = 0; i < buttonEL.length; i++){
    buttonEL[i].addEventListener("click", function(event)
    {
    console.log(`click2`)
    // event.stopPropagation();
    // if (event.target.matches(".button")){
        console.log('click');
        let element = event.target;
        text = element.textContent.split("");
    
        console.log('2');
        if(text[0] === question.correctAnswer) {
            secondsLeft = secondsLeft + 10;
            gameTimeEL.textContent = ` ${secondsLeft}`;
            changeScreen(questionArray[2]);
            winCheckText();
            question3(questionArray[2]);
        } else {
            secondsLeft = secondsLeft - 5;
            gameTimeEL.textContent = ` ${secondsLeft}`;
            changeScreen(questionArray[2]);
            loseCheckText();
            question3(questionArray[2]);
    }

    })

}}


function question3(question){
    // let buttonEL = document.querySelector(".container");
    // buttonEL.addEventListener("click", function(event)
    let buttonEL = document.querySelectorAll("button");
    for(i = 0; i < buttonEL.length; i++){
    buttonEL[i].addEventListener("click", function(event)
    {
    console.log(`click2`)
    // event.stopPropagation();
    // if (event.target.matches(".button")){
        console.log('click');
        let element = event.target;
        text = element.textContent.split("");
    
        console.log('3');
        if(text[0] === question.correctAnswer) {
            secondsLeft = secondsLeft + 10;
            gameTimeEL.textContent = ` ${secondsLeft}`;
            changeScreen(questionArray[3]);
            winCheckText();
            question4(questionArray[3]);
            return;
        
        } else {
            secondsLeft = secondsLeft - 5;
            gameTimeEL.textContent = ` ${secondsLeft}`;
            changeScreen(questionArray[3]);
            loseCheckText();
            question4(questionArray[3]);
            return;
        
        }

    })
}}

function question4(question){
    // let buttonEL = document.querySelector(".container");
    // buttonEL.addEventListener("click", function(event)
    let buttonEL = document.querySelectorAll("button");
    for(i = 0; i < buttonEL.length; i++){
    buttonEL[i].addEventListener("click", function(event)
    {
    console.log(`click2`)
    // event.stopPropagation();
        // if (event.target.matches(".button")){
            let h4 = document.querySelector("h4");
            console.log('click');
            let element = event.target;
            text = element.textContent.split("");
    
        console.log('4');
        if(text[0] == question.correctAnswer) {
            secondsLeft = secondsLeft + 10;
            gameTimeEL.textContent = ` ${secondsLeft}`;
            removeQuestion();
            addFinalScreen();
            h4.classList.add("hidden");
            
        
        } else {
            secondsLeft = secondsLeft - 5;
            gameTimeEL.textContent = ` ${secondsLeft}`;
            removeQuestion();
            addFinalScreen();
            h4.classList.add("hidden");
            
        }

    })
}}

function removeQuestion(){
    let h3 = document.querySelector("h3");
    containerEL.removeChild(h3);
    let button = document.querySelectorAll("button");
    for(let i = 0; i < 4; i++) {
        containerEL.removeChild(button[i]);
        }
}

function addFinalScreen(){
    inputValue = [];
    scoreValue =[];
    let storedInput = JSON.parse(localStorage.getItem("Initials"));
    let storedScore = JSON.parse(localStorage.getItem("Score"));
        if ((storedInput !== null) && (storedScore !== null)) {
            inputValue = storedInput;
            scoreValue = storedScore;
        }
    let score = secondsLeft;
    secondsLeft = NaN;
    
    // gameTimeEL.textContent = "0"
    gameTimeEL.classList.add("hidden");
    let h3 = document.createElement("h3");
    let paragraph = document.createElement("p");
    let form = document.createElement("form");
    h3.textContent = "All done!";
    paragraph.textContent = `Your final score is ${score}`;
    form.setAttribute("method", "POST");
    containerEL.appendChild(h3);
    containerEL.appendChild(paragraph);
    containerEL.appendChild(form);
    let label = document.createElement("label");
    let input = document.createElement("input");
    let button = document.createElement("button");
    // let a = document.createElement("a");
    label.textContent = `Enter your initials:`;
    button.textContent = `Submit`;
    button.setAttribute("onclick", "location.href='./score.html'")
    button.setAttribute("id", "submit-button");
    label.setAttribute("id", "form-label");
    // a.setAttribute("href", "./score.html");
    input.setAttribute("name", "submited-initails");
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);

    // a.appendChild(button);

    // Event listener for submit button
    button.addEventListener("click", function(event) {
        event.preventDefault();
        var inputText = input.value.trim();
        if (inputText === "") {
            return;
          }
        inputValue.push(inputText);
        scoreValue.push(score);
        localStorage.setItem("Initials", JSON.stringify(inputValue));
        localStorage.setItem("Score", JSON.stringify(scoreValue)); 
      });
}



// Start Button event listener that start the game 
// startButtonEL.addEventListener("click", setTime);
startButtonEL.addEventListener("click", function(){
    setTime()
    removeScreen();
    addScreen(questionArray[0]);
    checkAnswer(questionArray[0]);
});
