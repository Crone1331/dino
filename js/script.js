const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let scoresItem = document.getElementById("score");
let scores = 0;
document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");
    };
    setTimeout(function() {
        dino.classList.remove("jump");
    }, 500)
};
let isAlive = setInterval(function() {

    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 65 && cactusLeft > 0 && dinoTop >= 70) {
        alert("GAME OVER!  =( Press OK to try again ");
        scores = -1; //костыли ¯\_(ツ)_/¯ 
    }
    if (cactusLeft < 65 && cactusLeft > 0 && dinoTop <= 70) {




    }
    scoresItem.innerHTML = "Scores = " + scores;
}, 10);
//счетчик очков, просто таймером, после каждой итерации анимации кактуса
let scoreTime = setInterval(function() {
    scores++;
}, 1700)