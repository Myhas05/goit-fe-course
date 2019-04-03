'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  numbers.push(Number(input));
  console.log(numbers);
} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(total);
