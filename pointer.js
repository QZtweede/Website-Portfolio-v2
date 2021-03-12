let ani = document.getElementById("Cursor-animation")
document.addEventListener("mousemove", function(i){
    ani.style.left = i.clientX + "px"
    ani.style.top = i.clientY + "px"
})

function onClick(){
    console.log("test")
}
