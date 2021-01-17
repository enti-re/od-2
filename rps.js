function computerPlay()
{
     let k=Math.floor(Math.random()*3);
     let str =["rock","paper","scissor"];
     return str[k];
}
 function playGame(playerSelection,computerSelection)
 {
     let result;
    //  (`computer chooose ${computerSelection}`)
     if(playerSelection==computerSelection)
     result="Draw";
     else if((playerSelection=="rock") && (computerSelection=="scissor"))
     result="You are a Winner";
     else if(playerSelection=="scissor" && computerSelection=="paper")
     result="You are a Winner";
     else if(playerSelection=="paper" && computerSelection=="rock")
     result="You are a Winner";
     else
     result="You Lose";
     return result;
 }


const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener("click",()=>{
        let value = button.value;
        let computer = computerPlay();
        let result = playGame(value,computer);
        const bottomDisplay = document.querySelector("#bottomDisplay");
        bottomDisplay.textContent=`Result of the match:\n${result}`;
        const topDisplay=document.querySelector("#topDisplay");
        topDisplay.textContent=`Computer chooses ${computer}`;
    })
});





