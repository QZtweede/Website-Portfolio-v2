
var leeruitkomstenNav = document.getElementById("leeruitkomstenNav").addEventListener("click", dropDownMenu)

var isDropDownVis = false

function dropDownMenu(){
    if(isDropDownVis === false){
        document.getElementById("dropDown").style.display = "grid"
        isDropDownVis = true
    }
    else if(isDropDownVis === true){
        document.getElementById("dropDown").style.display = "none"
        isDropDownVis = false
    }
}