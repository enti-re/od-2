let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll(".btn");
let buttonArray = [...buttons];
const computerOutput = document.querySelector("#computerSelelction");
const finalResult = document.querySelector("#finalResult");
let playerScoreCard = document.querySelector("#ps");
let computerScoreCard = document.querySelector("#cs");
let playAgain = document.querySelector("#playAgain");
playAgain.style.visibility = "hidden";
playerScoreCard.fontweight="bold";
playerScoreCard.textContent=0;
computerScoreCard.textContent=0;


function computerPlay()
{
    let k=Math.floor(Math.random()*3);
    let str =["Rock","Paper","Scissor"];
    return str[k];
}

function playGame(playerSelection,computerSelection)
{
    let result;
    if(playerSelection==computerSelection)
    result="draw";
    else if((playerSelection=="Rock") && (computerSelection=="Scissor"))
    result="win";
    else if(playerSelection=="Scissor" && computerSelection=="Paper")
    result="win";
    else if(playerSelection=="Paper" && computerSelection=="Rock")
    result="win";
    else
    result="lose";
    return result;
}

function updateScore(value)
{
    let computerSelection = computerPlay();
    let playerSelection = value;
    let result = playGame(playerSelection,computerSelection);
    if(result=="win")
    {
        playerScore+=1;
        playerScoreCard.textContent=playerScore;
    }
    else if(result=="lose")
    {
        computerScore+=1;
        computerScoreCard.textContent=computerScore;
    }
    // console.log(result);
    computerOutput.textContent = computerSelection;
}



function Game()
{
    buttonArray.some((button)=>{
        button.addEventListener("click",()=>{
            if(computerScore>=5 || playerScore>=5)
            return true;

            let value = button.value;
            updateScore(value);

            if(computerScore>=5 || playerScore>=5)
            {
                if(computerScore==5)
                finalResult.textContent="Game Over! You Lose";
                else
                finalResult.textContent="Game Over! You Win";
                playAgain.style.visibility = "visible";
            }
        })
    })  
    return;
}

Game();
playAgain.addEventListener("click",()=>{
    window.location.reload();
});










