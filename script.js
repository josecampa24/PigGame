'use strict';
const player0El = document.querySelector(`.player--0`)
const player1El = document.querySelector(`.player--1`)
const score0 = document.querySelector(`#score--0`);
const score1 = document.getElementById(`score--1`);
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);
const currentScore0El = document.getElementById(`current--0`);
const currentScore1El = document.getElementById(`current--1`);

score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add(`hidden`);
const scores = [0, 0];
let currentScore = 0;
let ActivePlayer = 0;
let playing =true;

const switchPlayer = function() {
    document.getElementById(`current--${ActivePlayer}`).textContent = currentScore;
    ActivePlayer = ActivePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
};

btnRoll.addEventListener(`click`, function() {
    if (playing){
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
        currentScore = currentScore + dice;
        document.getElementById(`current--${ActivePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
}
});

btnHold.addEventListener(`click`, function() {
    if (playing){
    scores[ActivePlayer] = scores[ActivePlayer] + currentScore;  // ← Suma al score anterior
    document.getElementById(`score--${ActivePlayer}`).textContent = scores[ActivePlayer];  // ← Muestra el total

    if (scores[ActivePlayer] >= 20) {
        playing= false;
        diceEl.classList.add(`hidden`);
        document.querySelector(`.player--${ActivePlayer}`).classList.add(`player--winner`);
        document.querySelector(`.player--${ActivePlayer}`).classList.remove(`player--active`);
    }
    switchPlayer();
}
});