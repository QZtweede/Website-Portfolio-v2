let ani = document.getElementById("Cursor-animation2")

let ani2 = document.getElementById("Cursor-animation3")

let hover = document.getElementById("Hover-text")

let portfolioTxt = document.getElementById("portfolioTxt")


let curs = document.getElementById("Cursor-animation")
document.addEventListener("mousemove", function(i){
    curs.style.left = i.clientX + "px"
    curs.style.top = i.clientY + "px"
})

async function onClick(){
    ani.classList.toggle("animate")
    curs.classList.toggle("animate3")
    await sleep(100)
    ani2.classList.toggle("animate2")
    await sleep(300)
    curs.classList.toggle("animate3")
    ani.classList.toggle("animate")
    ani2.classList.toggle("animate2")
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

function opacityIn(){
    console.log("test")
    hover.style.opacity=1
}

function opacityOut(){
    console.log("test2")
    hover.style.opacity=0
}

// async function japaneseIn(){
//     portfolioTxt.innerHTML="ポートフォリオ"
//     portfolioTxt.style.fontSize="70px"
//     portfolioTxt.style.right="80px"
//     portfolioTxt.style.top="30px"
// }

// async function japaneseOut(){
//     await sleep(200)
//     portfolioTxt.innerHTML="Portfolio"
//     portfolioTxt.style.fontSize="120px"
//     portfolioTxt.style.right="200px"
//     portfolioTxt.style.top="10px"
// }