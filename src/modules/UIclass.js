import Store from './storage.js';

export default class UI {
  static displayUserScore() {
    const userInput = Store.getUser();
    userInput.forEach((user) => UI.addUserToList(user));
  }

  static addUserToList(newUser) {
    // console.log(newUser)
    const list = document.querySelector('.List');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${newUser.name}  :  ${newUser.score}</td>`;
    list.appendChild(row);
  }

  static clearFields() {
    document.querySelector('#username').value = '';
    document.querySelector('#score').value = '';
  }
}
