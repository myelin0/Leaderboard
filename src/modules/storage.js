// import User from './Users.js'
export default class Store {
  static getUser() {
    let user;
    if (localStorage.getItem('user') === null) {
      user = [];
    } else {
      user = JSON.parse(localStorage.getItem('user'));
    }
    return user;
  }

  static addUser(newUser) {
    const user = Store.getUser();
    user.push(newUser);
    localStorage.setItem('user', JSON.stringify(user));
  }
}