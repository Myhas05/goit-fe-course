'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let userPassword;

while (true) {
  userPassword = prompt('Enter your password');
  if (userPassword === null) {
    alert('See you later');
    break;
  } else if (passwords.includes(userPassword)) {
    alert('Welcome!!!');
    break;
  } else if (attemptsLeft > 1) {
    attemptsLeft -= 1;
    console.log(attemptsLeft);
    alert(`Invalid password, you have ${attemptsLeft} attempts left `);
  } else {
    alert('Your attempts have ended, your account has been blocked!');
    break;
  }
}
