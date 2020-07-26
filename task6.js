let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите пожалуйста число');

  if (input === null) {
    alert('Отменено пользователем');
  } else if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(+input);
    total += +input;
    console.log(numbers);
  }
} while (input != null);
console.log(`Общая сумма чисел равна ${total}`);
