//HW07 task01
//Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.

const originalArray = [1, 2, 3, 4, 5];

const reverseArray = (arr) => arr.reverse();
const reversedArray = reverseArray(originalArray);

console.log(reversedArray); // [5, 4, 3, 2, 1]

//HW07 task02
//Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, що містить тільки унікальні значення з обох масивів (без дублікатів).

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function uniqueValues(arr1, arr2){
    const newArr = arr1.concat(arr2);
    return newArr.filter((value, index) => newArr.indexOf(value) === index);
}
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]

//HW07 task03
//Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з інформацією про студентів (ім'я, вік, середній бал)
//і повертає середній бал усіх студентів.

const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

function calculateAverageGrade(arr){
    const sum = arr.reduce((accum, value) => accum + value.grade, 0);
    const average = sum / arr.length;

    return parseFloat(average.toFixed(1));
    // Предпологаю, что для дальнейших вычислений, нам необходимо число, а не строка, поэтому использовала parseFloat

}
console.log(calculateAverageGrade(students)); // 4.4