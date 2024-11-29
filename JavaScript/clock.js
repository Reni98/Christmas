const time = document.getElementById("time")

document.addEventListener("DOMContentLoaded", () => {
    setInterval(showTime, 1000)
})

const showTime = () => {
    let date = new Date();

    hr = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    hr = hr < 10 ? `0${hr}`:hr;
    min = min < 10 ? `0${min}`:min;
    sec = sec < 10 ? `0${sec}` : sec;

    console.log("hours" + hr + "minutes" + min + "seconds" + sec) 

   
    time.innerHTML= `${hr} : ${min}: ${sec}`
}
document.getElementById("time").style.color = "red";
document.getElementById("time").style.fontFamily = "Fantasy";
document.getElementById("time").style.fontSize = "";