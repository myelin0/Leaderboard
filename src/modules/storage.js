// export default class storageManager {
//   static setData = (userInput) => {
//     localStorage.setItem("userInput", JSON.stringify("userInput"));
//   };

//   static getData = () =>
//     localStorage.getItem("userInput")
//       ? JSON.parse(localStorage.getItem("userInput"))
//       : [];
// }
import User from './Users.js'
export default class Store{
  static getUser(){
    let user;
    if(localStorage.getItem('user')===null){
      user=[];
    } else {
      user =JSON.parse(localStorage.getItem("user"));
    }
    return user;
  }
  static addUser(newUser){
    const user = Store.getUser();
    console.log(user)
    user.push(newUser);
    console.log(user)
    localStorage.setItem("user",JSON.stringify(user))
  }

}