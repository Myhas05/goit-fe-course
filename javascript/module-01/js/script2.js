"use strict";
const country = "Индия";
let price;
switch (country) {
  case "Индия":
    price = 80;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case "Китай":
    price = 100;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case "Южная Америка":
    price = 250;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case "Австралия":
    price = 170;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  case "Ямайка":
    price = 120;
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    break;
  default:
    console.log("В вашей стране доставка не доступна");
    break;
}
