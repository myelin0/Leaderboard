import './style.css';

import Store from './modules/storage.js';
import User from './modules/Users.js';
import UI from './modules/UIclass.js';

const form = document.querySelector('#form');
document.addEventListener('DOMcontentLoaded', UI.displayUserScore());

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = document.getElementById('username').value;
  const userScore = document.getElementById('score').value;
  const newUser = new User(userName, userScore);
  UI.addUserToList(newUser);
  Store.addUser(newUser);
  UI.clearFields();
});
