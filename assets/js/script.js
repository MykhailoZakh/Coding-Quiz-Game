

let gameTimeEL = document.querySelector("#game-time");

let containerEL = document.querySelector("#container");

let secondsLeft = 40;

// Question Array with 4 question objects
let questionArray = [
    ({
        qText: "How do you declare a variable in JavaScript?",
        answer: [
            "1. var", 
            "2. All answer are correct", 
            "3. let", 
            "4. const" 
        ],
        correctAnswer: "2"
    }),
    ({
        qText: "How do you select an HTML element in JavaScript?",
        answer: [
             "1. getHTML()", 
             "2. getElementByHTML()", 
             "3. querySelector()", 
             "4. selectHTML()" 
        ],
        correctAnswer: "3"
    }),
    ({
        qText: "How to declare object in JavaScript?",
        answer: [
             "1. const object = {};", 
             "2. let object {};", 
             "3. const objext = ();", 
             "4. let object();" 
        ],
        correctAnswer: "1"
    }),
    ({
        qText: "Which one is correct loop in JavaScript?",
        answer: [
             "1. for{i= ; i < array.length; i++}();", 
             "2. loop(i= ; i < array.length; i++){};", 
             "3. loop{i= ; i < array.length; i++}();", 
             "4. for(i= ; i < array.length; i++){};" 
        ],
        correctAnswer: "4"
    })
];

// init() function to add starter game interface
function init(){

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

// selecting new HTML button element
let startButtonEL = document.querySelector("#start-button");

// Timer that count down from starting point to 0. Amd show it to main screen
 function setTime() {
    
    let timerInterval = setInterval(function(){
        secondsLeft--;
        gameTimeEL.textContent = ` ${secondsLeft}`;
        
        if(secondsLeft === NaN){
           
            clearInterval(timerInterval);
            gameTimeEL.classList.add("hidden");
        }
    
        if(secondsLeft <= 0) {
            let h4 = document.querySelector("h4");
            clearInterval(timerInterval);
            removeQuestion();
            addFinalScreen();
            h4.classList.add("hidden");
            
        }
       
    }, 1000);
}

// functions to change screen with quiz question and buttons

//remove main screen
function removeScreen() {
    let pOld = document.querySelector("p");
    let buttonOld = document.querySelector("#start-button");
    containerEL.removeChild(pOld);
    containerEL.removeChild(buttonOld);
}

// change text in h3 element 
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

// function to delete all question buttons 
function changeButtonsAnswers(question) {
    let button = document.querySelectorAll("button");
    for(let i = 0; i <question.length; i++) {
        containerEL.removeChild(button[i]);
        }
}

// function to add content to screen after removing it
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

// function to change screen between question
function changeScreen(question) {
    quizQuestion(question.qText);
    changeButtonsAnswers(question.answer);
    for(let i = 0; i <question.answer.length; i++) {
        quizAnswers(question.answer[i]);
    }
}

// functions to add text content with correct or wrong to h4 element
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

// functions for the end screen
// function to delete question screen
function removeQuestion(){
    let h3 = document.querySelector("h3");
    containerEL.removeChild(h3);
    let button = document.querySelectorAll("button");
    for(let i = 0; i < 4; i++) {
        containerEL.removeChild(button[i]);
        }
}

// function to add final screen and add functionality to it
function addFinalScreen(){
    // creating array for local storage and retrieving information from it
    inputValue = [];
    scoreValue =[];
    let storedInput = JSON.parse(localStorage.getItem("Initials"));
    let storedScore = JSON.parse(localStorage.getItem("Score"));
        if ((storedInput !== null) && (storedScore !== null)) {
            inputValue = storedInput;
            scoreValue = storedScore;
        }
    // geting score info and stoping the timer function
    let score = secondsLeft;
    secondsLeft = NaN;
    gameTimeEL.classList.add("hidden");
    // adding final screen 
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
    label.textContent = `Enter your initials:`;
    button.textContent = `Submit`;
    button.setAttribute("onclick", "location.href='./score.html'")
    button.setAttribute("id", "submit-button");
    label.setAttribute("id", "form-label");
    input.setAttribute("name", "submited-initails");
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);
    // Event listener for submit button and adding information from form input and score to local storage
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

//  Event listener for button's answers for first quiz question
function checkAnswer(question){

    let buttonEL = document.querySelectorAll("button");

    for(i = 0; i < buttonEL.length; i++){
        buttonEL[i].addEventListener("click", function(event) {
            event.stopPropagation();
            let element = event.target;
            text = element.textContent.split("");

            if(text[0] === question.correctAnswer) {
                secondsLeft = secondsLeft + 10;
                // gameTimeEL.textContent = ` ${secondsLeft}`;
                changeScreen(questionArray[1]);
                winCheckText();
                question2(questionArray[1]);    
            } else {
        
                secondsLeft = secondsLeft - 5;
                // gameTimeEL.textContent = ` ${secondsLeft}`;
                changeScreen(questionArray[1]);
                loseCheckText();
                question2(questionArray[1]);
            }

        })
    }
}

// Event listener for button's answers for second quiz question
function question2(question){
    let buttonEL = document.querySelectorAll("button");

    for(i = 0; i < buttonEL.length; i++){
        buttonEL[i].addEventListener("click", function(event) {
            let element = event.target;
            text = element.textContent.split("");
    
            if(text[0] === question.correctAnswer) {
                secondsLeft = secondsLeft + 10;
                // gameTimeEL.textContent = ` ${secondsLeft}`;
                changeScreen(questionArray[2]);
                winCheckText();
                question3(questionArray[2]);
            } else {
                secondsLeft = secondsLeft - 5;
                // gameTimeEL.textContent = ` ${secondsLeft}`;
                changeScreen(questionArray[2]);
                loseCheckText();
                question3(questionArray[2]);
            }

        })

    }
}

// Event listener for button's answers for third quiz question
function question3(question){
    let buttonEL = document.querySelectorAll("button");

    for(i = 0; i < buttonEL.length; i++){
        buttonEL[i].addEventListener("click", function(event) {
            let element = event.target;
            text = element.textContent.split("");
    
            if(text[0] === question.correctAnswer) {
                secondsLeft = secondsLeft + 10;
                // gameTimeEL.textContent = ` ${secondsLeft}`;
                changeScreen(questionArray[3]);
                winCheckText();
                question4(questionArray[3]);
        
            } else {
                secondsLeft = secondsLeft - 5;
                // gameTimeEL.textContent = ` ${secondsLeft}`;
                changeScreen(questionArray[3]);
                loseCheckText();
                question4(questionArray[3]);
            }

        })
    }
}

// Event listener for button's answers for last quiz question
function question4(question){
    let buttonEL = document.querySelectorAll("button");

    for(i = 0; i < buttonEL.length; i++){
        buttonEL[i].addEventListener("click", function(event) {

            let h4 = document.querySelector("h4");
            let element = event.target;
            text = element.textContent.split("");

            if(text[0] == question.correctAnswer) {
                secondsLeft = secondsLeft + 10;
                // gameTimeEL.textContent = ` ${secondsLeft}`;
                removeQuestion();
                addFinalScreen();
                h4.classList.add("hidden");
            
        
            } else {
                secondsLeft = secondsLeft - 5;
                // gameTimeEL.textContent = ` ${secondsLeft}`;
                removeQuestion();
                addFinalScreen();
                h4.classList.add("hidden");
            }

        })
    }
}



// Start Button's event listener that start the game 
startButtonEL.addEventListener("click", function(){
    setTime()
    removeScreen();
    addScreen(questionArray[0]);
    checkAnswer(questionArray[0]);
});
