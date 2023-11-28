

let gameTimeEL = document.querySelector("#game-time");

let conteinerEL = document.querySelector("#conteiner");

let secondsLeft = 10;

let questinObject = {
    qText: "Some question here",
    answer: [
        {text: "Answer1", correct: true  },
        {text: "Answer2", correct: false}, 
        {text: "Answer3", correct: false}, 
        {text: "Answer4", correct: false}
    ]
    
} 
// init() function to add starter game interface
function init(){
    console.log(`work`)

    let h3 = document.createElement("h3");
    h3.textContent = `Coding Quiz Challenge`;
    conteinerEL.appendChild(h3);

    let p1 = document.createElement("p");
    p1.textContent = `Try to answer the following code-related questions whithin the time limit.`;
    conteinerEL.appendChild(p1);

    let p2 = document.createElement("p");
    p2.textContent = `Keep in mind that incorrect answers will penalize your score/time by ten seconds!`;
    conteinerEL.appendChild(p2);

    let newButton = document.createElement("button");
    newButton.textContent = `Start Quiz`;
    newButton.setAttribute("id", "start-button")
    conteinerEL.appendChild(newButton);
}
init();


let startButtonEL = document.querySelector("#start-button");

// Timer that count down from starting point to 0. Amd show it to main screen
 function setTime() {
    let secondsLeft = 10;
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

function quizQuestion() {
    let h3 = document.createElement("h3");
    let h3old = document.querySelector("h3");
    h3.textContent = `Quizz Question`;
    conteinerEL.replaceChild(h3, h3old);
    };

// function to change paragraphe 
function quizAnswers(){
    let b = document.createElement("button");
    let p = document.querySelector("p");
    b.textContent = `Answer`;
    conteinerEL.replaceChild(b, p);
}

// function to change Start Quiz button 
function quizStartButtonChange(){
    let b = document.createElement("button");
    let p = document.querySelector("#start-button");
    b.textContent = `Answer`;
    conteinerEL.replaceChild(b, p);
}

// function to add new button
function quizAddButton() {
    let newButton = document.createElement("button");
    newButton.textContent = `Answer`;
    conteinerEL.appendChild(newButton);
}

// Start Button event listener that start the game 
// startButtonEL.addEventListener("click", setTime);
startButtonEL.addEventListener("click", function(){  
    console.log(`click`);
    quizQuestion();
    quizAnswers();
    quizAnswers();
    quizStartButtonChange()
    quizAddButton();
});