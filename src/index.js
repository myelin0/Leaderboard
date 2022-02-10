import './style.css';

const form = document.querySelector('#form');
let userName = document.getElementById('username');
let userScore = document.getElementById('score');
const List = document.querySelector('.List');
const refreshBtn = document.querySelector('#refreshBtn');

const addScore = async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2bBA0QuDAZYPN668fbO9/scores/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: userName,
          score: userScore,
        }),
      },
    );
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};

const getScore = async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2bBA0QuDAZYPN668fbO9/scores/',
    );
    const data = await response.json();
    const parsedData = data.result;
    const sortedScores = parsedData.sort((a, b) => b.score - a.score);

    let scoreHTML = '';
    sortedScores.forEach((el) => {
      scoreHTML
    += `<li>${el.user}  :  ${el.score}</li>`;
    });
    List.innerHTML = scoreHTML;
  } catch (error) {
    console.log(error);
  }
};

getScore();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  userName = document.getElementById('username').value;
  userScore = document.getElementById('score').value;
  addScore();
  refreshBtn.click();
  document.querySelector('#username').value = '';
  document.querySelector('#score').value = '';
});

refreshBtn.addEventListener('click', getScore);
document.addEventListener('pageshow', getScore());