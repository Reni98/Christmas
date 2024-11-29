const szoveg = document.getElementById("szoveg")
const korszoveg = document.getElementById("korszoveg")



let kor = prompt("Hány éves vagy");
function showMessage() {
    alert('Hello ez első JavaScript!');
}

if (kor < 18){
    korszoveg.innerHTML = "Nem játszhatsz!"
}

else if (kor < 70){
    alert("Te játszatsz!")
}

else{
    alert("Nem játszhatsz!")
}
szoveg.innerHTML = "Kor bekérő"
