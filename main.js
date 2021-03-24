let Button1 = document.getElementById("B1")
let Button2 = document.getElementById("B2")
Button1.addEventListener("click", B1Clicked)
Button2.addEventListener("click", B2Clicked)

let LU1 = document.getElementById("LU1")
let LU2 = document.getElementById("LU2")
let LU3 = document.getElementById("LU3")
let LU4 = document.getElementById("LU4")
let LU5 = document.getElementById("LU5")
let LU6 = document.getElementById("LU6")

var counter = 0


LU1.style.opacity = 1
LU2.style.opacity = 0
LU3.style.opacity = 0
LU4.style.opacity = 0
LU5.style.opacity = 0
LU6.style.opacity = 0

LU1.style.pointerEvents = "all"
LU2.style.pointerEvents = "none"
LU3.style.pointerEvents = "none"
LU4.style.pointerEvents = "none"
LU5.style.pointerEvents = "none"
LU6.style.pointerEvents = "none"

function B1Clicked(){
    counter++
    if(counter >= 6){
        counter = 0
    }
    Opacity()
}

function B2Clicked(){
    counter--
    if(counter <= -1){
        counter = 5
    }  
    Opacity()
}

function Opacity(){
    Reset()
    
    function Reset(){
    LU1.style.opacity = 0
    LU2.style.opacity = 0
    LU3.style.opacity = 0
    LU4.style.opacity = 0
    LU5.style.opacity = 0
    LU6.style.opacity = 0

    LU1.style.pointerEvents = "none"
    LU2.style.pointerEvents = "none"
    LU3.style.pointerEvents = "none"
    LU4.style.pointerEvents = "none"
    LU5.style.pointerEvents = "none"
    LU6.style.pointerEvents = "none"
    }

    if(counter == 0){
        Reset()
        LU1.style.opacity = 1
        LU1.style.pointerEvents = "all"
        console.log(counter)
    }

    if(counter == 1){
        Reset()
        LU2.style.opacity = 1
        LU2.style.pointerEvents = "all"
        console.log(counter)
    }

    if(counter == 2){
        Reset()
        LU3.style.opacity = 1
        LU3.style.pointerEvents = "all"
        console.log(counter)
    }

    if(counter == 3){
        Reset()
        LU4.style.opacity = 1
        LU4.style.pointerEvents = "all"
        console.log(counter)
    }

    if(counter == 4){
        Reset()
        LU5.style.opacity = 1
        LU5.style.pointerEvents = "all"
        console.log(counter)
    }

    if(counter == 5){
        Reset()
        LU6.style.opacity = 1
        LU6.style.pointerEvents = "all"
        console.log(counter)
    }
}