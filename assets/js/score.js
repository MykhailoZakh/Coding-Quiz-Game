// Arrays for saved score in local storage
inputValue = [];
scoreValue = [];
// Function to get value from local storage and print it to created li element
function addInput(){
    // retrieving info from local storage
    let storedInput = JSON.parse(localStorage.getItem("Initials"));
    let storedScore = JSON.parse(localStorage.getItem("Score"));
    if ((storedInput !== null) && (storedScore !== null)) {
        inputValue = storedInput;
        scoreValue = storedScore;
      }

      // Loop for creating LI item and adding text Content to it
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

    // event listener for clear button to clear all local storage info
    let clear = document.querySelector("#clear-button")
    clear.addEventListener("click", function() {
      inputValue = [];
      scoreValue = [];
      localStorage.setItem("Initials", JSON.stringify(inputValue));
      localStorage.setItem("Score", JSON.stringify(scoreValue)); 
      addInput();
    });

    // initiating main function when screen loaded
    addInput();