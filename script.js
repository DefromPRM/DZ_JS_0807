// Задание 1
// let userNum=+prompt('Введите число');
// function degree(userNum) {
//     return(userNum**3);
// }
// degree(userNum);
// console.log(degree(userNum));
// console.log(degree(2)+degree(3));

// Задание 2
// let userNum = +prompt('Введите число');
// if (userNum === '' || isNaN(userNum)) {
//     alert('adasdasd');
// }
// const salary = (userNum) => {
//     console.log(`Размер зарабатной платы за ввычетом налогов равен ${userNum*0.87}`);
// }
// salary(userNum);

// Задание 3
// let userNum1 = +prompt('Введите первое число');
// let userNum2 = +prompt('Введите второе число');
// let userNum3 = +prompt('Введите третье число');
// let maxValue = 1;
// function comprasion(userNum1, userNum2, userNum3) {
//     if (userNum1>userNum2 && userNum1>userNum3) {
//         maxValue = userNum1
//     } else if (userNum2>userNum1 && userNum2>userNum3) {
//         maxValue = userNum2
//     }
//     else if (userNum3>userNum1 && userNum3>userNum2) {
//         maxValue = userNum3
//     }
//     return (maxValue)
// }
// comprasion(userNum1,userNum2,userNum3, maxValue);
// console.log(userNum1,userNum2,userNum3);
// console.log(maxValue);

// Задание 4
// let userNum1 = +prompt('Введите первое число');
// let userNum2 = +prompt('Введите второе число');

// const sum = (userNum1, userNum2) => {
//     console.log(userNum1+userNum2);
// }
// sum(userNum1, userNum2);

// const diff = (userNum1, userNum2) => {
//     if (userNum1>=userNum2) {
//         console.log(userNum1-userNum2);
//     }
//     else {console.log('Первое число должно быть больше или равно второму')}
// }
// diff(userNum1, userNum2);

// const multi = (userNum1, userNum2) => {
//     console.log(userNum1*userNum2);
// }
// multi(userNum1, userNum2);

// const divide = (userNum1, userNum2) => {
//     console.log(userNum1/userNum2);
// }
// divide(userNum1, userNum2);

// Задание 4 с выбором (чуть усложнил для себя, но мне кажется так интереснее)
// let userNum1 = +prompt('Введите первое число');
// let userNum2 = +prompt('Введите второе число');
// let userAction = prompt('Выберите действие', '+ или - или * или /')

// const sum = (userNum1, userNum2) => {
//     console.log(userNum1+userNum2);
// }

// const diff = (userNum1, userNum2) => {
//     if (userNum1>=userNum2) {
//         console.log(userNum1-userNum2);
//     }
//     else {console.log('Первое число должно быть больше или равно второму')}
// }

// const multi = (userNum1, userNum2) => {
//     console.log(userNum1*userNum2);
// }

// const divide = (userNum1, userNum2) => {
//     console.log(userNum1/userNum2);
// }

// const userChoice = (userNum1, userNum2, userAction) => {
//     if (userAction==='+') {
//         return(sum(userNum1, userNum2));
//     } else if (userAction==='-') {
//         return(diff(userNum1, userNum2))
//     }
//     else if (userAction==='*') {
//         return(multi(userNum1, userNum2))
//     }
//     else if (userAction==='/') {
//         return(divide(userNum1, userNum2))
//     }
// }

// userChoice(userNum1, userNum2, userAction);