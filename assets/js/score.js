inputValue = [];
scoreValue = [];

function addInput(){
    
    let storedInput = JSON.parse(localStorage.getItem("Initials"));
    let storedScore = JSON.parse(localStorage.getItem("Score"));
    if ((storedInput !== null) && (storedScore !== null)) {
        inputValue = storedInput;
        scoreValue = storedScore;
      }

    let scoreList = document.querySelector("#score-list");  
    scoreList.innerHTML = "";
    for (let i = 0; i < inputValue.length; i++) {
        let initials = inputValue[i];
        let score = scoreValue[i];
    
        let li = document.createElement("li");
        li.textContent = `${initials} - Score: ${score}`;
        li.setAttribute("data-index", i);
        scoreList.appendChild(li);
      }
    }

    let clear = document.querySelector("#clear-button")
    clear.addEventListener("click", function() {
      inputValue = [];
      scoreValue = [];
      localStorage.setItem("Initials", JSON.stringify(inputValue));
      localStorage.setItem("Score", JSON.stringify(scoreValue)); 
      addInput();
    });
    addInput();