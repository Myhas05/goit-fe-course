"use strict";
const ADMIN_PASSWORD = "m4ng0h4ckz";
let message;
const admin = prompt("Введите пароль");
if (admin === null) {
  message = "Отменено пользователем!";
} else if (admin !== ADMIN_PASSWORD) {
  message = "Доступ запрещен, неверный пароль!";
} else {
  message = "Добро пожаловать!";
}
alert(message);
