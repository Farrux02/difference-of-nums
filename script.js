let firstNum = +prompt('Введите первое число');
let secondNum = +prompt('Введите второе число');

if (firstNum > secondNum) {
    console.log(firstNum + ' больше чем ' + secondNum);
} else if (firstNum === secondNum) {
    console.log(firstNum + ' равен ' + secondNum);
} else {
    console.log(firstNum + ' меньше чем ' + secondNum);
}

//Домашнее задание

// let firstNum = +prompt('Введите первое число');
// let secondNum = +prompt('Введите второе число');
// let thirdNumb = +prompt('Введите третье число');

// if (firstNum > secondNum && firstNum > thirdNumb) {
//     console.log(firstNum + ' больше чем ' + secondNum + " и больше чем " + thirdNumb);
// } else if (firstNum > secondNum && firstNum < thirdNumb) {
//     console.log(firstNum + ' больше чем ' + secondNum + ", но меньше чем " + thirdNumb);
// } else if ( firstNum < secondNum && firstNum > thirdNumb ) {
//     console.log(firstNum + ' меньше чем ' + secondNum + ", но больше чем " + thirdNumb);
// } else if ( firstNum < secondNum && firstNum < thirdNumb ) {
//     console.log(firstNum + ' меньше чем ' + secondNum + " и меньше чем " + thirdNumb);
// } 

// найти все возможные варианты