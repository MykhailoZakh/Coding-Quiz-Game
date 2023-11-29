

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
             "2. Answer2", 
             "3. Answer3", 
             "4. Answer4" 
        ],
        correctAnswer: "1"
    }),
    ({
        qText: "Some question here4",
        answer: [
             "1. Answer14", 
             "2. Answer2", 
             "3. Answer3", 
             "4. Answer4" 
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
    
    let timerIntercal = setInterval(function(){
        secondsLeft--;
        gameTimeEL.textContent = ` ${secondsLeft}`;
        if(secondsLeft === 0) {
            clearInterval(timerIntercal);
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


//  Event listener for button's answers for quiz question
function checkAnswer(question){
let buttonEL = document.querySelectorAll("button");
    for(let i =0; i < buttonEL.length; i++){
    buttonEL[i].addEventListener("click", function(event){
    console.log(`click2`)
    let index = 0;
    console.log(index);
    let element = event.target;
    text = element.textContent.split("");
    
    console.log(text);
    if(text[0] == question.correctAnswer) {
        secondsLeft = secondsLeft + 10;
        gameTimeEL.textContent = ` ${secondsLeft}`;
        changeScreen(questionArray[index + 1]);
        index++;
        console.log(index);
        return index;
    } else {
        secondsLeft = secondsLeft - 5;
        gameTimeEL.textContent = ` ${secondsLeft}`;
        changeScreen(questionArray[1]);
        index++;
        return index;
        
    }

    })
    }
}




// Start Button event listener that start the game 
// startButtonEL.addEventListener("click", setTime);
startButtonEL.addEventListener("click", function(){  
    console.log(`click`);
    removeScreen();
    addScreen(questionArray[0]);
    checkAnswer(questionArray[0]);
    if(index == 1){
    checkAnswer(questionArray[1]);
    console.log(index);
    }
});
