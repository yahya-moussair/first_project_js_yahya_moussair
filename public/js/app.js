//! create class users
class User {
  static userArray = [];
  constructor(fullName, email, age, password) {
    this.fullName = fullName;
    this.emai = email;
    this.age = age;
    this.password = password;
    User.userArray.push(this);
  }
}
//! ask the user if he want to log in or  sign up or change password and make it lowercase
let ask = prompt(
  "You want login , sign up Or change password , Or exit : "
).toLowerCase();
//! function for remove space from ask prompt
const removeSpace = (text) => {
  return text.split(" ").join("");
};
//! this is a loop for check ask prompt value
for (let i = 0; ; i++) {
  //! if the user choice is exit
  if (removeSpace(ask) == "exit") {
    break;
  }
  //! if ask prompt empty
  else if (!ask) {
    ask = prompt(
      "Pleases select a choice log in , sign up Or change password : "
    );
  }
  //! if ask prompt not equal any option or the user write the optio wrong
  else if (
    removeSpace(ask) != "login" &&
    removeSpace(ask) != "signup" &&
    removeSpace(ask) != "changepassword"
  ) {
    ask = prompt(
      "Pleases select a valid choice log in , sign up Or change password : "
    );
  }else{
    break;
  }
}
