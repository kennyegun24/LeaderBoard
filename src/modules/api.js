import Scores from './scores.js';

// CREATE A VARIABLE TO REPRESENT THE API LINK
const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const url = `${apiURL}games/`;
// GENERATE A RANDOM ID TO GIVE YOUR OWN PROJECT
const ID = 'dfhjhdHhhuGGJGCjbjgugjYUuu';
const scoreDisplay = document.querySelector('.scores_name');
let gameData;

const display = (gameData) => {
  scoreDisplay.innerHTML = '';
  const displayScores = gameData.map((list) => `<div class="api_lists">
                                                  <p> ${list.user} </p>
                                                  <p> ${list.score} </p>
                                                </div>`).join('');
  scoreDisplay.innerHTML = displayScores;
};

// CREATE AN ASYNC FUNCTION THAT SHOULD CONTAIN TWO ARGUEMENTS/PARAMETERS
// AND WILL ADD NEW SCORES TO THE API
const addScore = async (user, score) => {
  // CREATE A FUNCTION TO CREATE A NEW SCORE
  const playLoadObject = new Scores(user, score);
  // CREATE A VARIABLE THAT AWAIT A PROMISE AND POST A DATA/SCORE TO THE API
  const response = await fetch(`${url}${ID}/scores/`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(playLoadObject) });
  //  GAME DATA SHOULD AWAIT THE PROMISE FROM THE JSON
  gameData = await response.json();
  // RETURN THE VARIABLE
  return gameData;
};
// CREATE AN ASYNC FUNCTION TO GET THE SCORES
const getScores = async () => {
  // CREATE A VARIABLE THAT GET AWAIT AND GET A PRPOMISE
  const response = await fetch(`${url}${ID}/scores/`);
  //  GAME DATA SHOULD AWAIT THE PROMISE FROM THE JSON
  gameData = await response.json();
  // CREATE A CONDITIONAL STATS=EMENT THAT WILL CKECK IF THE PROMISE IS MET,
  // THEN IF IT IS MET, IT SHOULD DISPLAY THE RESULT GOTTEN TO THE SCRREEN
  if (response.ok) {
    display(gameData.result);
  }
};

export { addScore, getScores, scoreDisplay };
