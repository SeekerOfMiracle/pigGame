'use strict';

const possibleChoices=document.querySelectorAll('button')

const diceBox = document.querySelector(".dice")
const dice = document.querySelector('.dice-image')

const total1 = document.querySelector(".total1")
const total2 =document.querySelector(".total2")
const current1=document.querySelector(".current1")
const current2=document.querySelector(".current2") 
let possibleChoice;
let randomDice;
let game=true;
let current=[0, 0];
let total=[0, 0];
let turn = 0;


possibleChoices.forEach(e1=> e1.addEventListener('click', function a(e) {

    possibleChoice =e.target.id;
    // console.log(possibleChoice)

    if(turn == 1)
    {
        document.querySelector(".player:nth-last-of-type(1)").style.backgroundColor="rgba(255, 255, 255, 0.6)"
        document.querySelector(".player:nth-last-of-type(2)").style.backgroundColor="rgba(255, 255, 255, 0.3)"

    }
    else{
        document.querySelector(".player:nth-last-of-type(2)").style.backgroundColor="rgba(255, 255, 255, 0.6)"
        document.querySelector(".player:nth-last-of-type(1)").style.backgroundColor="rgba(255, 255, 255, 0.3)"
    }
   

    if(!game && (possibleChoice=="btnRoll" || possibleChoice == "btnHold")) possibleChoice="noClicks"
    switch(possibleChoice)
    {
        case "btnNew":
        randomDice=0;
        game=true;
        total1.textContent=0;
        total2.textContent=0;
        current1.textContent=0;
        current2.textContent=0;
        total=[0, 0];
        document.querySelectorAll(".btn").forEach(e1 => e1.style.cursor= "pointer")
        // console.log(randomDice)
            break;
        case "btnRoll":
            //Generate random dice roll
        randomDice = Math.floor(Math.random()*6+1)
        //console.log(randomDice)

            //Display dice roll
        dice.style.backgroundImage="url('Dice-"+randomDice+".png')";
        
            //Is it a 1?
            if(randomDice!=1){
                //Add dice roll to curent score
                current[turn]+=randomDice
                //Display new score
                eval("current" + (turn+1) +".textContent="+current[turn])
            }
            else{
                switchPlayer()
            }
            break;
        case "btnHold" :
            //adding curent to total
                total[turn]+=current[turn];
                
            //displaying total
                eval("total" + (turn+1) +".textContent="+total[turn])
            if(total[turn]>=50) playerWin()
            else switchPlayer()
            break;
        default:
           
            break;
    }
    
    if(randomDice)diceBox.style.display="inline"
    else diceBox.style.display="none"
}))

function switchPlayer(){
     //switch player
     initialValues();
    turn++;
    if(turn>1){
        turn=0;
    }
}
function playerWin(){
    // document.querySelector("btnRoll").disabled="true"
    // document.querySelector("btnHold").disabled="true"
    eval("total" + (turn+1) +".textContent= 'Win'")
    game=false;
    document.querySelectorAll(".btn:not(#btnNew)").forEach(e1 => e1.style.cursor="not-allowed")
    dice.style.backgroundImage="url('Dice-7.png')";
    dice.style.transform="scaleX("+(2*turn-1)+")";
    initialValues();
}

function initialValues(){
    current[turn]=0;
    eval("current" + (turn+1) +".textContent="+current[turn]);
}

function bgFixing(){
    if(turn = 1)
    {
        document.querySelector(".player:nth-last-of-type(1)").style.backgroundColor="rgba(255, 255, 255, 0.6)"
        document.querySelector(".player:nth-last-of-type(2)").style.backgroundColor="rgba(255, 255, 255, 0.3)"
    }
    else{
        document.querySelector(".player:nth-last-of-type(2)").style.backgroundColor="rgba(255, 255, 255, 0.6)"
        document.querySelector(".player:nth-last-of-type(1)").style.backgroundColor="rgba(255, 255, 255, 0.3)"
    }
}