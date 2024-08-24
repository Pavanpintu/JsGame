let userScore=0;
let compScore=0;

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    // console.log("Game was draw");
    msg.innerText="Game was draw. Play again.";
    msg.style.backgroundColor="blue";
};

const showWinner =(userWin,userChoice,compChoice) =>{
    if(userWin){
        // console.log("You won");
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You won. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="red";
    }else{
        // console.log("You lost");
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="green";
    }
};

const playGame = (userChoice) => {
    console.log("User choice = ",userChoice);
    // Generate computer choice
    let compChoice=genCompChoice();
    console.log("Computer choice = ",compChoice);

    if(userChoice === compChoice){
         drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock")
        {
            // paper,scissor
            userWin=compChoice=== "paper"?false:true;
        }else if(userChoice === "paper"){
        //    rock,scissor
           userWin = compChoice === "rock"? true: false ;
        }else{
            // rock,paper
           userWin = compChoice === "rock"?false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};

choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        
        const userChoice=choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});
