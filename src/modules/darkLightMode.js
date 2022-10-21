const mode = document.querySelector('.mode');
const Lightmode = document.querySelector('.lMode');
const main = document.querySelector('main');
const mainSection = document.querySelector('.main__section');
const thirdSection = document.querySelector('.third_section');
const scoreLists = document.querySelector('.score_lists');
const scoresName = document.querySelector('.scores_name');
const darkColor = '#393737';
const initial = 'initial';
const white = '#fff';
mode.addEventListener('click', () => {
  mode.style.display = 'none';
  Lightmode.style.display = 'block';
  main.style.color = white;
  scoreLists.classList.add('p');
  scoresName.classList.add('dyn_scores_name');
  main.style.background = darkColor;
  mainSection.style.background = darkColor;
  thirdSection.style.background = darkColor;
  scoreLists.style.background = darkColor;
});

Lightmode.addEventListener('click', () => {
  mode.style.display = 'block';
  Lightmode.style.display = 'none';
  main.style.color = initial;
  scoreLists.classList.remove('p');
  scoresName.classList.remove('dyn_scores_name');
  main.style.background = initial;
  mainSection.style.background = initial;
  thirdSection.style.background = initial;
  scoreLists.style.background = initial;
});