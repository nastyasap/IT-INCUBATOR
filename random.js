/* Написать функцию которая выдает случайное число от min(включая) до max(включая) */
function getRandomInt(min, max) {
  //Math.round() // Округление по правилам математики
  // Math.ceil() // Округление до большего
  // Math.floor() // Округление до меньшего
  // Math.random(); // Рандом (от 0 до 1 не включая)

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
0 // 0
0.1 // 0.2
0.2 // 0.4
0.3 // 0.6
0.4 // 0.8
0.5 // 1
0.6 // 1.2
0.7 // 1.4
0.8 // 1.6
0.9 // 1.8
0.99 // почти 2
const numbersCount = {};

for (let i = 0; i < 100000; i++) {
  const result = getRandomInt(2, 10);
  if (!numbersCount[result]) {
    numbersCount[result] = 1;
  } else {
    numbersCount[result]++
  }
}

console.table(numbersCount);
