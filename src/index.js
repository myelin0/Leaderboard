// import "./style.css";

import Store from './modules/storage.js';
import User from './modules/Users.js';
import UI from './modules/UIclass.js';

const form = document.querySelector('#form');

// Event : Display UsersScore
document.addEventListener('DOMcontentLoaded', UI.displayUserScore());

// Add a user
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log(e)
  // get Form values
  const userName = document.getElementById('username').value;
  const userScore = document.getElementById("score").value;
  // console.log(userName, userScore)
  // instantiate a user
  const newUser = new User(userName, userScore);

  // Add user to UI
  UI.addUserToList(newUser);
  // add user to store
  Store.addUser(newUser);
  // console.log(newUser)

  // console.log(newUser)
  // clear fields
  UI.clearFields();
});

// console.log(score);
