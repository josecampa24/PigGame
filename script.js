'use strict';
const score0 = document.querySelector(`#score--0`);
const score1 = document.getElementById(`score--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const currentScore0El = document.getElementById(`current--0`);
const currentScore1El = document.getElementById(`current--1`);


score0.textContent=0;
score1.textContent=0;
diceEl.classList.add(`hidden`);
let currentScore=0;



btnRoll.addEventListener(`click`,function(){
let dice =Math.trunc(Math.random()*6)+1;
diceEl.classList.remove(`hidden`);
diceEl.src= `dice-${dice}.png`;

if(dice !== 1){
    currentScore=currentScore+dice;
    currentScore0El.textContent=currentScore;
}else{
    currentScore=0
 currentScore0El.textContent=currentScore;
}
})

