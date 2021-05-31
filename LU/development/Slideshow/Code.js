let Image1 = document.getElementById("img1")
let Image2 = document.getElementById("img2")
let Image3 = document.getElementById("img3")
let Image4 = document.getElementById("img4")

loop1()

async function loop1(){
    Image1.classList.toggle("fade")
    await sleep(2000)
    Image1.classList.toggle("fade")
    loop2()
}

async function loop2(){
    Image2.classList.toggle("fade")
    await sleep(2000)
    Image2.classList.toggle("fade")
    loop3()
}

async function loop3(){
    Image3.classList.toggle("fade")
    await sleep(2000)
    Image3.classList.toggle("fade")
    loop4()
}

async function loop4(){
    Image4.classList.toggle("fade")
    await sleep(2000)
    Image4.classList.toggle("fade")
    loop1()
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }