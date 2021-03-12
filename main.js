let Button1 = document.getElementById("B1")
let Button2 = document.getElementById("B2")
Button1.addEventListener("click", B1Clicked)
Button2.addEventListener("click", B2Clicked)

var counter = 0
var LUs = ["LU1", "LU2", "LU3", "LU4", "LU5", "LU6"]

function B1Clicked(){
    counter++
    if(counter >= 6){
        counter = 0
    }
    console.log(counter)
}

function B2Clicked(){
    counter--
    if(counter <= -1){
        counter = 5
    }
    console.log(counter)
}