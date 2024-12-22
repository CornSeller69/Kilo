let currentValue;
let value;
let score = 0;
let highscore = 0;
let music1 = new Audio('Materials/music1.mp3');
music1.loop = true;
let isPolish = false;
if(navigator.language == 'pl') {
    isPolish = true;
    translatePL();
}
// Wpisuj karty jako poniższe zmienne, aby było łatwiej zmieniać
let qSpade = 'Materials/Cards/q-spade.png';
let qClub = 'Materials/Cards/q-club.png';
let qDiamond = 'Materials/Cards/q-diamond.png';
let qHeart = 'Materials/Cards/q-heart.png';

function translatePL() {
    document.getElementById("button1").innerHTML = "Graj";
    document.getElementById("button2").innerHTML = "Jak grać?";
    document.getElementById("button3").innerHTML = "Zamknij";
    document.getElementById("htph").innerHTML = "Jak grać w Kilo?";
    document.getElementById("htpi").innerHTML = `Zdobywasz punkt jeżeli twój wybór 'Wyższa' lub 'Niższa' pasuje.<br>
            Zdobędziesz punkt za 'Niższa' jeżeli następna karta jest niższa niż ta obecna, i zdobędziesz za 'Wyższa', jeżeli następna będzie wyższa lub równa niż ta obecna.<br>
            Wartości kart odpowiadają numerkom na nich; dla Asa, Jopka, Damy i Króla jest trochę inaczej jednak. Gdyż As ma wartość 11 (tak, nie ma karty o wartości 1, najniższa to 2 w tej grze),<br>
            ta reszta kart jest zwykle uznawana za *wartość większa niż 10, lecz mniejsza niż 11*. Ich kolejność: J &#60; Q &#60; K.`;
    document.getElementById("score").innerHTML = "Wynik: 0";
    document.getElementById("hscore").innerHTML = "Najwyższy wynik: 0";
    document.getElementById("cimg").src = 'Materials/Cards/nopl.png';
    //document.getElementById("").innerHTML = "";
}

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