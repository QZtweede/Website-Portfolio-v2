let ani = document.getElementById("Cursor-animation2")

let ani2 = document.getElementById("Cursor-animation3")

let curs = document.getElementById("Cursor-animation")
document.addEventListener("mousemove", function(i){
    curs.style.left = i.clientX + "px"
    curs.style.top = i.clientY + "px"
})

async function onClick(){
    ani.classList.toggle("animate")
    await sleep(100)
    ani2.classList.toggle("animate2")
    await sleep(300)
    ani.classList.toggle("animate")
    ani2.classList.toggle("animate2")
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }