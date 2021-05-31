let Button1 = document.getElementById("B1").addEventListener("click", B1Clicked)
let Button2 = document.getElementById("B2").addEventListener("click", B2Clicked)
let Button3 = document.getElementById("B3").addEventListener("click", B3Clicked)

let OutcomeTxt = document.getElementById("Result-Txt")

let Rock1 = document.getElementById("img-R-1")
let Rock2 = document.getElementById("img-R-2")
let Paper1 = document.getElementById("img-P-1")
let Paper2 = document.getElementById("img-P-2")
let Scissors1 = document.getElementById("img-S-1")
let Scissors2 = document.getElementById("img-S-2")

let Input
let botOutput
let Result



function B1Clicked(){
    Reset()
    Input = 0
    console.log(Input)
    RandomInputEnemy()
    Rock1.style.opacity = 100
}

function B2Clicked(){
    Reset()
    Input = 1
    console.log(Input)
    RandomInputEnemy()
    Paper1.style.opacity = 100
}

function B3Clicked(){  
    Reset()
    Input = 2
    console.log(Input)
    RandomInputEnemy()
    Scissors1.style.opacity = 100
}


function RandomInputEnemy(){
    botOutput = Math.floor(Math.random() * 3)
    console.log(botOutput)

    if(botOutput === 0)
    {
        Rock2.style.opacity = 100
    }

    if(botOutput === 1)
    {
        Paper2.style.opacity = 100
    }

    if(botOutput === 2)
    {
        Scissors2.style.opacity = 100
    }
    Outcome()
}

function Reset(){
    Rock1.style.opacity = 0
    Paper1.style.opacity = 0
    Scissors1.style.opacity = 0
    Rock2.style.opacity = 0
    Paper2.style.opacity = 0
    Scissors2.style.opacity = 0   
}

function Outcome(){
    if(Input === botOutput){
        Result = "Tie";
        console.log("Result = " + Result)
        OutcomeTxt.textContent = "You Tied"
    }

    if(Input === 0 && botOutput === 1){
        Result = "Lost"
        console.log("Result = " + Result)
        OutcomeTxt.textContent = "You Lost"
    }

    if(Input === 0 && botOutput === 2){
        Result = "Won"
        console.log("Result = " + Result)
        OutcomeTxt.textContent = "You Won"
    }

    if(Input === 1 && botOutput === 0){
        Result = "Won"
        console.log("Result = " + Result)
        OutcomeTxt.textContent = "You Won"
    }

    if(Input === 1 && botOutput === 2){
        Result = "Lost"
        console.log("Result = " + Result)
        OutcomeTxt.textContent = "You Lost"
    }

    if(Input === 2 && botOutput === 0){
        Result = "Lost"
        console.log("Result = " + Result)
        OutcomeTxt.textContent = "You Lost"
    }

    if(Input === 2 && botOutput === 1){
        Result = "Won"
        console.log("Result = " + Result)
        OutcomeTxt.textContent = "You Won"
    }
}