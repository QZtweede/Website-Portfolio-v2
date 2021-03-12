let ani = document.getElementById("Cursor-animation2")
document.addEventListener("mousemove", function(i){
    ani.style.left = i.clientX + "px"
    ani.style.top = i.clientY + "px"
})

let curs = document.getElementById("Cursor-animation")
document.addEventListener("mousemove", function(i){
    curs.style.left = i.clientX + "px"
    curs.style.top = i.clientY + "px"
})

function onClick(){
    ani.classList.toggle("animate")
    console.log("scale")
}
