let currentValue;
let value;
let score = 0;
let highscore = 0;
let music1 = new Audio('Materials/music1.mp3');
music1.loop = true;
document.getElementById("button1").addEventListener("click", play);
document.getElementById("button2").addEventListener("click", displayHelp);
// Wpisuj karty jako poniższe zmienne, aby było łatwiej zmieniać
let qSpade = 'Materials/Cards/q-spade.png';
let qClub = 'Materials/Cards/q-club.png';
let qDiamond = 'Materials/Cards/q-diamond.png';
let qHeart = 'Materials/Cards/q-heart.png';

function randomize() {
    return Math.floor(Math.random() * 52) + 1;
}

function displayHelp() {
    document.getElementById("helpbox").style.visibility = 'visible';
    document.getElementById("helpbox").style.opacity = 1;
}

function hideHelp() {
    document.getElementById("helpbox").style.opacity = 0;
    setTimeout(function() {document.getElementById("helpbox").style.visibility = 'hidden';}, 500);   
}

function play() {
    document.getElementById("button1").style.opacity = 0;
    document.getElementById("button2").style.opacity = 0;
    setTimeout(function() {
        document.getElementById("button1").style.visibility = 'hidden';
        document.getElementById("button2").style.visibility = 'hidden';
    },500);
    music1.play();
    debugger; /////
}