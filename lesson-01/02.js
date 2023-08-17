// code
let number1 = Math.floor(Math.random() * 100)
checkNum = number1 % 2
if (checkNum === 0) {
  console.log(number1 + ' :Это четное число')
} else {
  console.log(number1 + ' :Это нечетное число')
}