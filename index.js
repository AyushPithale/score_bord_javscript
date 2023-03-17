let homeScoreEl =  document.getElementById("home-el");
let guestScoresEl = document.getElementById("guest-el");
let addOneEl = document.getElementById("addone");
let addTwoEl = document.getElementById("addtwo");
let addThreeEl =document.getElementById("addthree");
let newGame = document.getElementById("new-game");

let countHome = 0;
let countGuest = 0;
let reset = 0;


// homeScore
const addOneHome = function () {
     countHome += 1;
     homeScoreEl.textContent = countHome ;
}

const addTwoHome = function () {
    countHome += 2;
    homeScoreEl.textContent = countHome ;
}

const addThreeHome = function () {
    countHome += 3;
    homeScoreEl.textContent = countHome ;
}

//subHome
const subHome = function (){
    countHome -= 1
    homeScoreEl.textContent = countHome;
}

//guestScore

const addOneGuest = function () {
    countGuest += 1;
    guestScoresEl.textContent = countGuest ;
}

const addTwoGuest = function () {
    countGuest+= 2;
    guestScoresEl.textContent = countGuest ;
}

const addThreeGuest = function () {
    countGuest+= 3;
    guestScoresEl.textContent = countGuest ;
}

//sub-guest

const subGuest = function (){
    countGuest -= 1
    guestScoresEl.textContent = countGuest;
}

//new game

const newgame = function() {
   countHome = reset;
   homeScoreEl.textContent = countHome;
    
   countGuest =reset;
   guestScoresEl.textContent = countGuest;

}