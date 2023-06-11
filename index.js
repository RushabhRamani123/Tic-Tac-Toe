let btnRef = document.querySelectorAll(".button-option"); 
let popupRef = document.querySelector(".popup"); 
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msRef = document.getElementById("message"); 
// Winning Pattern Array
var winningPattern =
    [[0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
];
//let start with the x 
let xTurn = true 
let count = 0; 
// enable all the  button for the new game 

const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;

    });
    popupRef.classList.add("hide");
};

const disabledButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    popupRef.classList.remove("hide"); 
}

newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons(); 
});
restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
const winFunction = (letter) => {
    disabledButtons();
    if (letter == "X")
        msRef.innerHTML = "&#x1F389; </br> 'X' Wins "; 
    else {
        msRef.innerHTML = "&#x1F389; </br> 'O' Wins "; 
    }
}
const winChecker = () => {
    debugger; 
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        

        if ((element1 != "") &&(element2 != "") && (element3 != ""))
        {
            if (element1 == element2 && element2 == element3)
            {
                winFunction(element1); 
                }
            }
    }
}
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = "X";
            element.disabled = true;
        }
        else {
            xTurn = true;
            element.innerText = "O";
            element.disabled = true ;
        }
        
        count += 1; 
        if (count == 9) 
        {
            // The match is draw  to be shown here
            disabledButtons(); 
            msRef.innerHTML = "&#x1F60E; </br> It is a Draw Match ";
            
        }
        
        // check the winner 
        winChecker(); 
    });
});
















