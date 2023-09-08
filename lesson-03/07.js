//Удали все нечетные цифры в двухмерном массиве. Полученный результат выведи в консоль. 


 const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];
console.log(numbers);

const deletOddNum = arr => {
  return arr.map(row => row.filter(el => el % 2 === 0))
};

console.log(deletOddNum(numbers));