let currentValue;
let value;
let score = 0;
let highscore = 0;
let music1 = new Audio('Materials/music1.mp3');
let mh;  // upewnia sie że karty nie będą się szaleńczo powtarzać..
music1.loop = true;
let isPolish = false;
if(navigator.language == 'pl') {
    isPolish = true;
    translatePL();
}
// Wpisuj karty jako poniższe zmienne, aby było łatwiej zmieniać
let spadeK = 'Materials/Cards/k-spade.png'; // 1
let clubK = 'Materials/Cards/k-club.png'; // 2
let diamondK = 'Materials/Cards/k-diamond.png'; // 3
let heartK = 'Materials/Cards/k-heart.png'; // 4
let spadeQ = 'Materials/Cards/q-spade.png'; // 5
let clubQ = 'Materials/Cards/q-club.png'; // 6
let diamondQ = 'Materials/Cards/q-diamond.png'; // 7
let heartQ = 'Materials/Cards/q-heart.png'; // 8
let spadeJ = 'Materials/Cards/j-spade.png'; // 9
let clubJ = 'Materials/Cards/j-club.png'; // 10
let diamondJ = 'Materials/Cards/j-diamond.png'; // 11
let heartJ = 'Materials/Cards/j-heart.png'; // 12
let spadeA = 'Materials/Cards/ace-spade.png'; // 13
let clubA = 'Materials/Cards/ace-club.png'; // 14
let diamondA = 'Materials/Cards/ace-diamond.png'; // 15
let heartA = 'Materials/Cards/ace-heart.png'; // 16
let spade10 = 'Materials/Cards/10-spade.png'; // 17
let club10 = 'Materials/Cards/10-club.png'; // 18
let diamond10 = 'Materials/Cards/10-diamond.png'; // 19
let heart10 = 'Materials/Cards/10-heart.png'; // 20
let spade9 = 'Materials/Cards/9-spade.png'; // 21
let club9 = 'Materials/Cards/9-club.png'; // 22
let diamond9 = 'Materials/Cards/9-diamond.png'; // 23
let heart9 = 'Materials/Cards/9-heart.png'; // 24
let spade8 = 'Materials/Cards/8-spade.png'; // 25
let club8 = 'Materials/Cards/8-club.png'; // 26
let diamond8 = 'Materials/Cards/8-diamond.png'; // 27
let heart8 = 'Materials/Cards/8-heart.png'; // 28
let spade7 = 'Materials/Cards/7-spade.png'; // 29
let club7 = 'Materials/Cards/7-club.png'; // 30
let diamond7 = 'Materials/Cards/7-diamond.png'; // 31
let heart7 = 'Materials/Cards/7-heart.png'; // 32
let spade6 = 'Materials/Cards/6-spade.png'; // 33
let club6 = 'Materials/Cards/6-club.png'; // 34
let diamond6 = 'Materials/Cards/6-diamond.png'; // 35
let heart6 = 'Materials/Cards/6-heart.png'; // 36
let spade5 = 'Materials/Cards/5-spade.png'; // 37
let club5 = 'Materials/Cards/5-club.png'; // 38
let diamond5 = 'Materials/Cards/5-diamond.png'; // 39
let heart5 = 'Materials/Cards/5-heart.png'; // 40
let spade4 = 'Materials/Cards/4-spade.png'; // 41
let club4 = 'Materials/Cards/4-club.png'; // 42
let diamond4 = 'Materials/Cards/4-diamond.png'; // 43
let heart4 = 'Materials/Cards/4-heart.png'; // 44
let spade3 = 'Materials/Cards/3-spade.png'; // 45
let club3 = 'Materials/Cards/3-club.png'; // 46
let diamond3 = 'Materials/Cards/3-diamond.png'; // 47
let heart3 = 'Materials/Cards/3-heart.png'; // 48
let spade2 = 'Materials/Cards/2-spade.png'; // 49
let club2 = 'Materials/Cards/2-club.png'; // 50
let diamond2 = 'Materials/Cards/2-diamond.png'; // 51
let heart2 = 'Materials/Cards/2-heart.png'; // 52
let allCards = ['', spadeK, clubK, diamondK, heartK, spadeQ, clubQ, diamondQ, heartQ, spadeJ, clubJ, diamondJ, heartJ, spadeA, clubA, diamondA, heartA, spade10, club10, diamond10, heart10, spade9, club9, diamond9, heart9, spade8, club8, diamond8, heart8, spade7, club7, diamond7, heart7, spade6, club6, diamond6, heart6, spade5, club5, diamond5, heart5, spade4, club4, diamond4, heart4, spade3, club3, diamond3, heart3, spade2, club2, diamond2, heart2 ];
let allValues = ['', 14, 14, 14, 14, 13, 13, 13, 13, 12, 12, 12, 12, 11, 11, 11, 11, 10, 10, 10, 10, 9, 9, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2];

function translatePL() {
    document.getElementById("button1").innerHTML = "Graj";
    document.getElementById("button2").innerHTML = "Jak grać?";
    document.getElementById("button3").innerHTML = "Zamknij";
    document.getElementById("button4").innerHTML = "Wyższa!";
    document.getElementById("button5").innerHTML = "Niższa!";
    document.getElementById("htph").innerHTML = "Jak grać w Kilo?";
    document.getElementById("htpi").innerHTML = `Zdobywasz punkt jeżeli twój wybór 'Wyższa' lub 'Niższa' pasuje.<br>
            Zdobędziesz punkt za 'Niższa' jeżeli następna karta jest niższa niż ta obecna, i zdobędziesz za 'Wyższa', jeżeli następna będzie wyższa lub równa niż ta obecna.<br>
            Wartości kart odpowiadają numerkom na nich; dla Asa, Waleta, Damy i Króla jest trochę inaczej jednak. Gdyż As ma wartość 11 (tak, nie ma karty o wartości 1, najniższa to 2 w tej grze),<br>
            ta reszta kart jest zwykle uznawana za *wartość większa niż 10, lecz mniejsza niż 11*. Ich kolejność: J &#60; Q &#60; K.`;
    document.getElementById("score").innerHTML = "Wynik: 0";
    document.getElementById("hscore").innerHTML = "Najwyższy wynik: 0";
    document.getElementById("cimg").src = 'Materials/Cards/nopl.png';
    //document.getElementById("").innerHTML = "";
}

function displayHelp() {
    document.getElementById("helpbox").style.visibility = 'visible';
    document.getElementById("helpbox").style.opacity = 1;
}

function hideHelp() {
    document.getElementById("helpbox").style.opacity = 0;
    setTimeout(function() {document.getElementById("helpbox").style.visibility = 'hidden';}, 500);   
}

/*function play() {
    document.getElementById("button1").style.position = 'absolute';
    document.getElementById("button2").style.position = 'absolute';
    document.getElementById("button1").style.opacity = 0;
    document.getElementById("button2").style.opacity = 0;
    setTimeout(function() {
        document.getElementById("button1").style.visibility = 'hidden';
        document.getElementById("button2").style.visibility = 'hidden';
    },500);
    music1.play();
    let h = Math.floor(Math.random() * 52) + 1;
    mh = h;
    value = allValues[h];
    currentValue = allValues[h];
    document.getElementById("cimg").src = allCards[h];
    document.getElementById("button4").style.position = 'unset';
    document.getElementById("button5").style.position = 'unset'; //  troche clanky, ale działa
    document.getElementById("button5").style.visibility = 'visible';
    document.getElementById("button4").style.visibility = 'visible';
    document.getElementById("button5").style.opacity = 1;
    document.getElementById("button4").style.opacity = 1;
}

function higher() {
    let h = Math.floor(Math.random() * 52) + 1;
    if (mh == h) {
        d = Math.floor(Math.random() * 3);
        if (d == 0) {h--;}
        else if (d == 1) {h++;}
        //else if (d == 2) {return 0;}
    }
    mh = h;
    currentValue = allValues[h];
    if (currentValue > value || currentValue == value) {
        value = allValues[h];
        document.getElementById("cimg").src = allCards[h];
        if (highscore == score) {highscore++;}
        score++;
        if(isPolish) {
            document.getElementById("score").innerHTML = "Najwyższy wynik: " + highscore;
            document.getElementById("score").innerHTML = "Wynik: " + score;
        } else {
            document.getElementById("score").innerHTML = "Highscore: " + highscore;
            document.getElementById("score").innerHTML = "Current score: " + score;
        }
    } else {
        score = 0;
        if (isPolish) {document.getElementById("score").innerHTML = "Wynik: " + score;}
        else {document.getElementById("score").innerHTML = "Current score: " + score;}
    }
}

function lower() {
    let h = Math.floor(Math.random() * 52) + 1;
    if (mh == h) {
        d = Math.floor(Math.random() * 3);
        if (d == 0) {h--;}
        else if (d == 1) {h++;}
        //else if (d == 2) {return 0;}
    }
    mh = h;
    currentValue = allValues[h];
    if (currentValue < value) {
        value = allValues[h];
        document.getElementById("cimg").src = allCards[h];
        if (highscore == score) {highscore++;}
        score++;
        if(isPolish) {
            document.getElementById("score").innerHTML = "Najwyższy wynik: " + highscore;
            document.getElementById("score").innerHTML = "Wynik: " + score;
        } else {
            document.getElementById("score").innerHTML = "Highscore: " + highscore;
            document.getElementById("score").innerHTML = "Current score: " + score;
        }
    } else {
        score = 0;
        if (isPolish) {document.getElementById("score").innerHTML = "Wynik: " + score;}
        else {document.getElementById("score").innerHTML = "Current score: " + score;}
    }
}*/

let previousCard = [];

function play() {
    console.log("Play function started");
    document.getElementById("button1").style.position = 'absolute';
    document.getElementById("button2").style.position = 'absolute';
    document.getElementById("button1").style.opacity = 0;
    document.getElementById("button2").style.opacity = 0;
    setTimeout(function() {
        document.getElementById("button1").style.visibility = 'hidden';
        document.getElementById("button2").style.visibility = 'hidden';
    }, 500);
    music1.play();
    let h = getRandomCard();
    mh = h;
    value = allValues[h];
    currentValue = allValues[h];
    console.log(`Initial card: ${h}, value: ${value}`);
    document.getElementById("cimg").src = allCards[h];
    document.getElementById("button4").style.position = 'unset';
    document.getElementById("button5").style.position = 'unset'; // troche clanky, ale działa
    document.getElementById("button5").style.visibility = 'visible';
    document.getElementById("button4").style.visibility = 'visible';
    document.getElementById("button5").style.opacity = 1;
    document.getElementById("button4").style.opacity = 1;
    console.log("Play function completed");
}

function higher() {
    console.log("Higher function started");
    let h = getRandomCard();
    console.log(`New card: ${h}, previous card: ${mh}`);
    mh = h;
    currentValue = allValues[h];
    console.log(`Current value: ${currentValue}, previous value: ${value}`);
    if (currentValue >= value) {
        console.log("Condition met for higher or equal value");
        value = allValues[h];
        document.getElementById("cimg").src = allCards[h];
        console.log(`Image updated to: ${allCards[h]}`);
        if (highscore == score) { highscore++; }
        score++;
        console.log(`Score updated: ${score}, Highscore: ${highscore}`);
        if (isPolish) {
            document.getElementById("score").innerHTML = "Najwyższy wynik: " + highscore;
            document.getElementById("score").innerHTML = "Wynik: " + score;
        } else {
            document.getElementById("score").innerHTML = "Highscore: " + highscore;
            document.getElementById("score").innerHTML = "Current score: " + score;
        }
    } else {
        console.log("Condition not met, resetting score");
        score = 0;
        if (isPolish) { document.getElementById("score").innerHTML = "Wynik: " + score; }
        else { document.getElementById("score").innerHTML = "Current score: " + score; }
    }
    console.log("Higher function completed");
}

function lower() {
    console.log("Lower function started");
    let h = getRandomCard();
    console.log(`New card: ${h}, previous card: ${mh}`);
    mh = h;
    currentValue = allValues[h];
    console.log(`Current value: ${currentValue}, previous value: ${value}`);
    if (currentValue < value) {
        console.log("Condition met for lower value");
        value = allValues[h];
        document.getElementById("cimg").src = allCards[h];
        console.log(`Image updated to: ${allCards[h]}`);
        if (highscore == score) { highscore++; }
        score++;
        console.log(`Score updated: ${score}, Highscore: ${highscore}`);
        if (isPolish) {
            document.getElementById("score").innerHTML = "Najwyższy wynik: " + highscore;
            document.getElementById("score").innerHTML = "Wynik: " + score;
        } else {
            document.getElementById("score").innerHTML = "Highscore: " + highscore;
            document.getElementById("score").innerHTML = "Current score: " + score;
        }
    } else {
        console.log("Condition not met, resetting score");
        score = 0;
        if (isPolish) { document.getElementById("score").innerHTML = "Wynik: " + score; }
        else { document.getElementById("score").innerHTML = "Current score: " + score; }
    }
    console.log("Lower function completed");
}

function getRandomCard() {
    let h;
    do {
        h = Math.floor(Math.random() * 52) + 1;
    } while (h === previousCard);
    previousCard = h;
    return h;
}
