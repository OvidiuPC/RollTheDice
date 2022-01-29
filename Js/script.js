'use strict'
alert('First player who have 100 point winn the game')
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')




btnNew.addEventListener('click', () => {
    window.location.reload()
})
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')
const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
btnRoll.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${random}.png`
    //Switch player if dice === 1
    if (random !== 1) {
        currentScore += random;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore

    } else {
        switchPlayer()
    }

})
function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
    console.log(activePlayer);
}
btnHold.addEventListener('click', () => {
    //Add curent score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    console.log(scores[activePlayer]);
    if (scores[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        btnHold.disabled = true;
        btnRoll.disabled = true;
        diceEl.classList.add('hidden')
    } else {
        //Switch to the next player
        switchPlayer()

    }
})