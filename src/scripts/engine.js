const bgm =  document.getElementById("bgm")
let button = document.getElementById("dark/ligth-theme")
let music = document.getElementById("music")
let sqek = new Audio("./src/sounds/sqek.mp3");
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

function playSqek() {
    sqek.play()
}

function stopBgm() {
    bgm.pause()
}

music.addEventListener('mousedown', function() {
    if(music.innerText === "Play") {
        music.innerText = "Mute"
        playBgm()
    } else {
        music.innerText = "Play"
        stopBgm()
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'p') {
        music.innerText = "Mute"
        playBgm()
    }else if (event.key === 'm') {
        music.innerText = "Play"
        stopBgm()
    }
});

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
      document.getElementById('subirBtn').style.display = 'block';
    } else {
      document.getElementById('subirBtn').style.display = 'none';
    }
  });
  
  document.getElementById('subirBtn').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
    });
});

button.addEventListener('mousedown', function() {
    playSqek()
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