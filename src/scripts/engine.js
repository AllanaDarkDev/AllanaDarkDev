const bgm =  document.getElementById("bgm")
let button = document.getElementById("dark/ligth-theme")
const header = document.getElementById("header")
const main = document.getElementById("main")
const footer = document.getElementById("footer")
const sobreMim = document.getElementsByClassName("sobre-mim")[0]
const elementosP = document.querySelectorAll("p");
const elementosH2 = document.querySelectorAll("h2");
const elementosH3 = document.querySelectorAll("h3");

function playBgm() {
    bgm.play()    
}

function stopBgm() {
    bgm.pause()
}

button.addEventListener('mousedown', function() {
    header.classList.toggle("header-dark")
    main.classList.toggle("main-dark")
    footer.classList.toggle("footer-dark")
    sobreMim.classList.toggle("sobre-mim-dark")
    
    elementosP.forEach(function(elemento) {
        elemento.classList.toggle("dark-font");
    })
    elementosH2.forEach(function(elemento) {
        elemento.classList.toggle("dark-font");
    });
    elementosH3.forEach(function(elemento) {
        elemento.classList.toggle("dark-font");
    });
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'p') {
        playBgm()
    }else if (event.key === 'm') {
        stopBgm()
    }
});