let ani = document.getElementById("Cursor-animation2")

let curs = document.getElementById("Cursor-animation")
document.addEventListener("mousemove", function(i){
    curs.style.left = i.clientX + "px"
    curs.style.top = i.clientY + "px"
})

async function onClick(){
    ani.classList.toggle("animate")
    console.log("scale")
    await sleep(300)
    ani.classList.toggle("animate")
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }