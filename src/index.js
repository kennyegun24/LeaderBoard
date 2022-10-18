import './style.css';
import clearInput from './modules/clearInput.js';
import { getScores } from './modules/api';
import { addScore } from './modules/api';
import { score, namVal } from './modules/clearInput.js';

const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh');


form.addEventListener('submit', (e) => {
  e.preventDefault();

const scores = score.value
const nameVal = namVal.value

addScore(nameVal, scores);
getScores();
clearInput()
});

refresh.addEventListener('click', getScores)