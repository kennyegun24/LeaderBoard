import './style.css';
import clearInput, { score, namVal } from './modules/clearInput.js';
import { getScores, addScore } from './modules/api';

const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const scores = score.value;
  const nameVal = namVal.value;

  addScore(nameVal, scores);
  getScores();
  clearInput();
});

refresh.addEventListener('click', getScores);