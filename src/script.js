//HW08 task01
//Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив,
//у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.

const words = ["apple", "banaNA", "kiWi", "ORANGE"];

capitalizeStrings = (arr) =>
    arr.slice().map(element =>
    element.toLowerCase()).map(word =>
    word.charAt(0).toUpperCase() + word.slice(1));

console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]

//HW08 task02
//Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив, що містить елементи, які є в обох вихідних масивах.

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function findCommonElements(arr1, arr2){
    const newArr = arr1.concat(arr2);
    return newArr.filter((value, index) => newArr.indexOf(value) !== index);
}
console.log(findCommonElements(array1, array2)); // [3, 4, 5]

//HW08 task03
//Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
// sum - сума всіх елементів масиву
// average - середнє значення елементів масиву
// min - мінімальне значення в масиві
// max - максимальне значення в масиві

const numbers = [1, 2, 3, 4, 5];

function analyzeArray(arr){
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {sum, average, min, max}
}

console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }
