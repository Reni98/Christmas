const playButton = document.getElementById('play')
const stopButton = document.getElementById('stop')
const circle = document.getElementsByClassName("circle")
const title = document.getElementById('title')

function onLight() {
    for (let i = 0; i < circle.length; i++) {
        circle[i].removeAttribute("style")
       
    }
}

function offLight() {
    title.style.animation = "none"
    for (let i = 0; i < circle.length; i++) {
        circle[i].style.animation = "none"
        circle[i].style.background = "#563260"
    }
}
stopButton.addEventListener('click', offLight)
playButton.addEventListener('click', onLight)