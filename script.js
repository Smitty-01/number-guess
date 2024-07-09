'use strict';

const ans = Math.random();
const corr_ans = Math.ceil(ans * 20);
//document.querySelector('.number').textContent = corr_ans;
console.log(corr_ans);
let score_1 = 20;

// function update() {
//   document.querySelector('.message').textContent = 'incorrect answer';
// }

// const enteredval = document.querySelector('.guess').value;
// console.log(enteredval);

function checkVal() {
  const enteredval = document.querySelector('.guess').value;
  //console.log(enteredval);
  const x = Number(enteredval);
  if (x < 1 || x > 20) {
    document.querySelector('.message').textContent = 'invalid number ❌';
    score_1--;
    document.querySelector('.score').textContent = score_1;
    console.log(score_1);
    if (score_1 === 0) {
      document.querySelector('.message').textContent = 'You lost🤡🤡';
    }
  } else if (x > corr_ans) {
    document.querySelector('.message').textContent = 'Smaller no.📉';
    score_1--;
    document.querySelector('.score').textContent = score_1;
    console.log(score_1);
    if (score_1 === 0) {
      document.querySelector('.message').textContent = 'You lost🤡🤡';
    }
  } else if (x < corr_ans) {
    document.querySelector('.message').textContent = 'larger no.📈';
    score_1--;
    document.querySelector('.score').textContent = score_1;
    console.log(score_1);
    if (score_1 === 0) {
      document.querySelector('.message').textContent = 'You lost🤡🤡';
    }
  } else {
    document.querySelector('.message').textContent = 'You guessed it right🥳🥳';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = corr_ans;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
}

document.querySelector('.check').addEventListener('click', checkVal);

document.querySelector('.again').addEventListener('.click', reset);

function reset() {
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}
