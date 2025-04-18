//! create class users
class User {
  static userArray = [];
  constructor(fullName, email, age, password, money) {
    this.fullName = fullName;
    this.email = email;
    this.age = age;
    this.password = password;
    this.money = money;
    User.userArray.push(this);
  }
  Withdraw() {
    let withdrawMoney = parseInt(
      prompt("enter how much you want to Withdraw : ")
    );
    if (this.money <= withdrawMoney) {
      alert("you are dont have this money in your wallet : ");
      services = prompt(
        "this is all our services :\nWithdraw\n Deposit\n Take a Loan\n Invest\n"
      );
    } else {
      this.money -= withdrawMoney;
      alert(
        "the Withdraw transaction has been succesfully , now you have : " +
          this.money
      );
      services = prompt(
        "this is all our services :\nWithdraw\n Deposit\n Take a Loan\n Invest\n"
      );
    }
  }
}
let user1 = new User(
  "Yahya Moussair",
  "yahyamoussair05@gmail.com",
  21,
  "Yahya#04",
  1000
);
//! ask the user if he want to log in or  sign up or change password and make it lowercase
let ask = prompt("You want login , sign up Or change password , Or exit : ")
  .toLowerCase()
  .trim();
//! function for remove space from ask prompt
const removeSpaceFromMiddle = (text) => {
  return text.split(" ").join("");
};
//! function for make the first letter of full name uppercase
const firstLetter = (text) => {
  return text
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
    .join(" ");
};
//! function for validate if the name contain special character and numbers
const validateName = (text, Regex) => {
  return Regex.test(text);
};
//! this is a loop for check ask prompt value
for (let i = 0; ; i++) {
  //! if the user choice is exit
  if (removeSpaceFromMiddle(ask) == "exit") {
    break;
  }
  //! if ask prompt empty
  else if (!ask) {
    ask = prompt(
      "Pleases select a choice log in , sign up Or change password : "
    );
  }
  //! if ask prompt not equal any option or the user write wrong option
  else if (
    removeSpaceFromMiddle(ask) != "login" &&
    removeSpaceFromMiddle(ask) != "signup" &&
    removeSpaceFromMiddle(ask) != "changepassword"
  ) {
    ask = prompt(
      "Pleases select a valid choice log in , sign up Or change password : "
    );
  } else {
    break;
  }
}
//! password regex
const passwordRegex = /[@#\-+*\/]/;
//! if the user choice is sign up
const signup = () => {
  //!fullname
  let nameAsk = prompt("enter your Full name :").trim();
  //! forcheck the length of the fullname string wihout spacing
  for (let i = 0; removeSpaceFromMiddle(nameAsk).length <= 5; i++) {
    nameAsk = prompt(
      "Please enter your Full name have more than 5 characters :"
    ).trim();
  } //! name regex
  const nameRegex = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  for (let i = 0; ; i++) {
    if (validateName(nameAsk, nameRegex) == true) {
      nameAsk = prompt(
        "Please enter a name dont match special character or numbers like : yahya moussair"
      ).trim();
    } else {
      alert("Your name is " + firstLetter(nameAsk));
      break;
    }
  }
  //! email
  let emailAsk = prompt("enter your email :").toLowerCase().trim();
  //! email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  for (let i = 0; ; i++) {
    //! check if the emailalready exist
    let existingMail = User.userArray.findIndex((e) => e.email == emailAsk);
    //! if the email not contain any @ or the length less than 10 or have a space in the middle
    if (
      emailAsk != removeSpaceFromMiddle(emailAsk) ||
      removeSpaceFromMiddle(emailAsk).length < 10 ||
      validateName(emailAsk, emailRegex) == false ||
      !emailAsk
    ) {
      emailAsk = prompt(
        "Please enter an email wihout space in the middle and the length bigger than 10 and have @:"
      )
        .toLowerCase()
        .trim();
    }
    //! if the email already exist
    else if (existingMail != -1) {
      alert("this email already exist Please enter anoher one");
      emailAsk = prompt(
        "Please enter an email wihout space in the middle and the length bigger than 10 and have @:"
      )
        .toLowerCase()
        .trim();
    } else {
      alert("your email is valid " + emailAsk);
      break;
    }
  }
  //! age
  let ageAsk = prompt("Enter your age :").trim();
  //! age regex
  let ageRegex = /^\d+$/;
  for (let i = 0; ; i++) {
    if (
      ageAsk != removeSpaceFromMiddle(ageAsk) ||
      validateName(ageAsk, ageRegex) == false
    ) {
      ageAsk = prompt("Please Enter your age only digits :").trim();
    } else {
      alert("your age is " + ageAsk);
      break;
    }
  }
  //! password
  let passwordAsk = prompt("Enter a password :").trim();
  for (let i = 0; ; i++) {
    if (
      passwordAsk != removeSpaceFromMiddle(passwordAsk) ||
      passwordAsk.length < 7 ||
      validateName(passwordAsk, passwordRegex) == false
    ) {
      passwordAsk = prompt(
        "Please enter a password wihout space in the middle and must be more than 7 characters and at least contain one special character :"
      ).trim();
    } else {
      alert("your password is " + passwordAsk);
      break;
    }
  }
  //! comfirm password
  let passwordComfirmAsk = prompt("Confirm your password :").trim();
  for (let i = 0; passwordComfirmAsk != passwordAsk; i++) {
    passwordComfirmAsk = prompt(
      "the password is not match , enter the password :"
    );
  }
  //!//! tell the user he can log out anytime
  alert(
    "You can log out any time you want , just tell me `log out` in the prompt"
  );
};

//! if the user choice is login
const login = () => {
  let login = prompt("Please enter you email : ");
  let passwordUser = prompt("Please enter your password : ");
  //! verify email existing
  for (let i = 0; ; i++) {
    let emailFind = User.userArray.findIndex((e) => e.email == login);
    if (emailFind == -1) {
      login = prompt("wrong email , try again :");
    } else if (User.userArray[emailFind].password != passwordUser) {
      passwordUser = prompt("wrong password , try again :");
    } else {
      alert(
        "welcom to your account Mr . " + User.userArray[emailFind].fullName
      );
      alert("you have in your ballance : " + User.userArray[emailFind].money);
      let services = prompt(
        "this is all our services :\nWithdraw\n Deposit\n Take a Loan\n Invest\n Log Out "
      );
    }
  }
};
//! if the user choice is change password
const changePassword = () => {
  //! verify email existing
  let login = prompt("Please enter you email : ");
  let changePassword = prompt("Please enter you new password : ");
  for (let i = 0; ; i++) {
    let emailFind = User.userArray.findIndex((e) => e.email == login);
    if (emailFind == -1) {
      login = prompt("wrong email , try again :");
    } else {
      for (
        let i = 0;
        changePassword != removeSpaceFromMiddle(changePassword) ||
        changePassword.length < 7 ||
        validateName(changePassword, passwordRegex) == false;
        i++
      ) {
        changePassword = prompt(
          "Please enter a password wihout space in the middle and must be more than 7 characters and at least contain one special character :"
        );
      }
    }
    //! assign the new password to user 
    User.userArray[emailFind].password = changePassword;
    alert("Congratulation you new password is : " + changePassword);
    break
  }
};

if (removeSpaceFromMiddle(ask) == "changepassword") {
  changePassword();
//   login()
} else if (removeSpaceFromMiddle(ask) == "signup") {
  signup();
} else if (removeSpaceFromMiddle(ask) == "login") {
  login();
}
console.log(user1.password);

