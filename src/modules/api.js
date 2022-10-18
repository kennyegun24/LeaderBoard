import Scores from './scores.js';

const display = (gameData) => {
  const scoreDisplay = document.querySelector('.scores_name');
  scoreDisplay.innerHTML = '';
  // gameData.sort((a, b) => a.score - b.user);
  const displayScores = gameData.map((list) => `<p class ='scoreList'>${list.user}: ${list.score} </p>`).join('');
  scoreDisplay.innerHTML = displayScores;
};

const addScore = async (user, score) => {
  const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${apiURL}games/`;
  const ID = 'ajtuTgubydhYUNubdauu';
  const playLoadObject = new Scores(user, score);
  const response = await fetch(`${url}${ID}/scores/`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(playLoadObject) });
  const gameData = await response.json();
  return gameData;
};

const getScores = async () => {
  const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const url = `${apiURL}games/`;
  const ID = 'ajtuTgubydhYUNubdauu';
  const response = await fetch(`${url}${ID}/scores/`);
  const gameData = await response.json();
  if (response.ok) {
    display(gameData.result);
  }
};

export { addScore, getScores };
