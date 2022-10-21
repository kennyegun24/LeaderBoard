import './index.css';
import './modules/darkLightMode';
import clearInput, { score, namVal } from './modules/clearInput.js';
import { getScores, addScore, scoreDisplay } from './modules/api';

const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const scores = score.value;
  const nameVal = namVal.value;
  scoreDisplay.innerHTML += `<div class="api_lists"><p> ${nameVal}</p> <p> ${scores} </p>`;
  addScore(nameVal, scores);
  clearInput();
});

refresh.addEventListener('click', () => {
  getScores();
});
