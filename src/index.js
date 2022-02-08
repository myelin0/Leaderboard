// import "./style.css";

import Store from './modules/storage.js';
import User from './modules/Users.js';

// const name = document.querySelector('#username');
// const score = document.querySelector('#score').value;
const form = document.querySelector('#form');
// const userInput = [];

class UI {
  static displayUserScore() {
    const userInput = Store.getUser();
    userInput.forEach((user) => UI.addUserToList(user));
  }

  static addUserToList(newUser) {
    // console.log(newUser)
    const list = document.querySelector('.List');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${newUser.score}: ${newUser.name}</td>`;
    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector('#username').value = '';
    document.querySelector('#score').value = '';
  }
}

// Event : Display UsersScore
document.addEventListener('DOMcontentLoaded', UI.displayUserScore());

// Add a user
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log(e)
  // get Form values
  const userScore = document.getElementById('score').value;
  const userName = document.getElementById('username').value;
  // console.log(userName, userScore)
  // instantiate a user
  const newUser = new User(userScore, userName);

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
