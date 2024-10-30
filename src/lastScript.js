//HW01
//console.log('Hey, this is my first JS program');

//HW02
//HW 2 part 1

let hw2101 = 'number' + 23 + 32; // 'number2332' -> string
let hw2102 = 41 + 1 + 'number'; // '42number' -> string
let hw2103 = null + 1; // 1 -> number
let hw2104 = 'five' + + 'two'; // 'fiveNaN' -> string
let hw2105 = 2 && 7; // 7 -> number
let hw2106 = +'40' + +'2'; // 42 -> number
let hw2107 = '10' - 5 === 6; // false -> boolean
let hw2108 = true + false; // 1 -> number
let hw2109 = '4px' - 3; // NaN -> number
let hw2110 = '4' - 3; // 1 -> number
let hw2111 = '2' + 3 ** 2; // '29' -> string
let hw2112 = 12 / '6'; // 2 -> number
let hw2113 = 23 + 42 + 'number'; // '65number' -> string
let hw2114 = '10' + (5 === 6); // '10false' -> string
let hw2115 = 'number' + 15 + 3; // 'number153' -> string

//HW 2 part 2

let hw2201 = undefined + 1; // NaN -> number
let hw2202 = 'true' == true; // false -> boolean
let hw2203 = false == 'false' // false -> boolean
let hw2204 = null == '' // false -> boolean
let hw2205 = 3 ** (9 / 3); // 27 -> number
let hw2206 = !!'false' == !!'true' // true -> boolean
let hw2207 = 0 || '0' && 1; // 1 -> number
let hw2208 = 1 < 2 < 3; // true -> boolean
let hw2209 = 'foo'+ + +'bar'; // 'fooNaN' -> string
let hw2210 = 3 ** 2 / 3; // 3 -> number
let hw2211 = 1 < 2 > 3; // false -> boolean
let hw2212 = (+null == false) < 1; // false -> boolean
let hw2213 = false && true || true; // true -> boolean
let hw2214 = false && (true || true); // false -> boolean
let hw2215 = (+null == false) < 1 ** 5; // false -> boolean

//HW03 part 1 ver 1
//Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення залежно від значення числа.
//Якщо число ділиться на 3, то повідомлення має бути Fizz, якщо число ділиться на 5, то повідомлення має бути Buzz,
//а якщо число ділиться і на 3, і на 5, то повідомлення має бути FizzBuzz. Наприклад, для числа 15 повідомлення має бути FizzBuzz.

let number = parseInt(prompt("Enter your number"));

switch (true) {
    case isNaN(number):
        console.log("You entered a strange number or not a number");
        break;
    case (number % 3 === 0 && number % 5 === 0):
        console.log("FizzBuzz");
        break;
    case (number % 3 === 0):
        console.log("Fizz");
        break;
    case (number % 5 === 0):
        console.log("Buzz");
        break;
    default:
        console.log("The number is not divisible by 3 or 5");
}

//HW03 part 2
//Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення, що вказує, чи є введений рік високосним.

let year = parseInt(prompt("Enter your year"));

if(!isNaN(year)){
    (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
        ? console.log(year + " is a leap year.")
        : console.log(year + " isn\'t a leap year.");
}
else{
    console.log("You entered not correct year")
}

//HW03 part 3
//Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі Вам N рік / роки / років.
// Залежно від числа N слово рік має змінюватися на років або року. Наприклад, Вам 1 рік, Вам 5 років, Вам 42 роки

let userAge = parseInt(prompt("Введіть, будь ласка, свій вік"));
let answer = userAge % 100;
function notCorrectAnswer(){
    console.log("Ви ввели не число, або ви ще не народились, або помилилися." +
        "\nБудь ласка, введіть свій справжній вік.");
}
if (isNaN(userAge) || userAge <= 0) {
    notCorrectAnswer();
} else if (answer >= 11 && answer <= 14) {
    console.log("Вам " + userAge + " років!");
} else {
    answer = answer % 10;
    if (answer >= 2 && answer <= 4) {
        console.log("Вам " + userAge + " роки!");
    } else if (answer === 0 || (answer >= 5 && answer <= 9)) {
        console.log("Вам " + userAge + " років!");
    } else {
        console.log("Вам " + userAge + " рік!");
    }
}


//HW03 part 1 ver 2
let number2 = parseInt(prompt("Enter your second number"));
isNaN(number2)
    ? console.log("You entered a strange number or not a number")
    : (number % 3 === 0 && number % 5 === 0) ? console.log("FizzBuzz")
        : (number % 3 === 0) ? console.log("Fizz")
            : (number % 5 === 0) ? console.log("Buzz")
                : console.log("The second number is not divisible by 3 or 5");


let number3 = parseInt(prompt("Enter your second number"));
isNaN(number3)
    ? console.log("You entered a strange number or not a number")
    : console.log(`${number3 % 3 === 0 ? "Fizz" : ""}${number3 % 5 === 0 ? "Buzz" : ""}` || "The second number is not divisible by 3 or 5");


//Применение шаблонной строки (template strings)

//1. Конкатенация
let name = "Alex";
let age = 25;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message);
//2. Перенос на новую строку
let message1 = `This is line 1
And this is line 2`;
console.log(message);
//3. Выражение
let a = 5;
let b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
//4. Сложные выражения, условия
let temperature = 30;
let weather = `The temperature today is ${temperature > 25 ? "hot" : "cold"}.`;
console.log(weather);


//HW04 task01
//Вам необхідно написати програму, яка приймає на вхід число і виводить у консоль повідомлення у форматі:
// Число N є простим числом, якщо число N просте, та Число N не є простим числом, якщо число N складене.

console.log("Первое задание: ")
function isSimpleNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            console.log(`${number} не является простым числом.`);
            return;
        }
    }
    if (number <= 1) {
        console.log(`${number} не является простым числом.`);
    } else {
        console.log(`${number} является простым числом.`);
    }
}
isSimpleNumber(11);
console.log("___________________________\n");

//HW04 task02
//Вам необхідно написати програму, яка приймає на вхід число N і знаходить усі числа в діапазоні від 1 до N, які є досконалими числами.

console.log("Второе задание: ")
function isPerfectNumber(number) {
    if (number <= 0) {
        return false;
    }
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

function consolePerfectNumber(number) {
    isPerfectNumber(number)
        ? console.log(`${number} является совершенным числом.`)
        : console.log(`${number} не является совершенным числом.`);
}
consolePerfectNumber(6);
console.log("___________________________\n");

//HW04 task03 part01
//Вам необхідно написати програму, яка приймає на вхід число, що буде висотою вершини вашої ялинки.
// Уся ялинка має бути реалізована одним рядком:

console.log("Третье задание \"половина дерева\": ")
function holyTree(treeNumber){
    console.log(`Ваше число: ${treeNumber}`);

    let row = '';
    for (let i = 1; i <= treeNumber; i++) {
        row += i;
        console.log(row);
    }
}

holyTree(5);
console.log("___________________________\n");

//HW04 task03 part02
console.log("Третье задание \"целое дерево\": ")
function doubleHolyTree(heightTree) {
    console.log(`Ваше число: ${heightTree}`);

    let i = 1;
    while (i <= heightTree) {
        let row = '';

        for (let j = 1; j <= heightTree * 2 - 1; j++) {
            if (j < heightTree - i + 1) {
                row += ' ';
            } else if (j <= heightTree + i - 1) {
                row += j - (heightTree - i);
            }
        }
        console.log(row);
        i++;
    }
}
doubleHolyTree(4);

//HW05 task01: Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.

function reverseString(str = 'Ivan'){

    console.log(`Ваша строка ${str}`);
    let newStr = str.split('', str.length).reverse().join('');
    console.log(`Ваше слово наоборот будет: ${newStr}`);
}

reverseString1 = (str = 'Hillel') => str.split('', str.length).reverse().join('');

reverseString();
reverseString('Anastasiia');
console.log('_____________________\n');
//HW05 task02: Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.

function isPalindrome(str = 'level'){

    console.log(`Ваша строка "${str}"`);
    let onlySymbolStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reverseStr = onlySymbolStr.split('', str.length).reverse().join('');

    onlySymbolStr === reverseStr
        ? console.log(`Cтрока "${str}" является палидромом`)
        : console.log(`Cтрока "${str}" не является палидромом`);

}
isPalindrome();
isPalindrome('Madam, I\'m Adam');
isPalindrome('Hillel school');

//HW05 task03:
//Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД.
console.log('_____________________\n');
function findGCD(numberOne, numberTwo) {
    console.log(`Ваши два числа: первое число = ${numberOne}, второе число = ${numberTwo}`);

    for (; numberTwo !== 0;) {
        let gcd = numberTwo;
        numberTwo = numberOne % numberTwo;
        numberOne = gcd;
    }
    return console.log(`Общий делитель для ваших чисел будет равен ${numberOne}`);
}

findGCD(20, 50);

//HW06 task01
//Вам необхідно написати функцію doubleLetter(str),
//яка приймає на вхід рядок і повертає новий рядок, у якому кожен символ повторюється двічі hello ⇒ hheelllloo.

const doubleLetter = (str = 'hello') => str.replaceAll(/(.)/g, '$1$1');
console.log(doubleLetter());

//HW06 task02
//Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка приймає на вхід рядок, число, що є довгим рядком,
//який ми хочемо отримати в результаті та символ, яким доповниться рядок, якщо це буде потрібно, четвертим параметром є буремний «прапор»,
//чи додавати символи зліва або справа(за замовчуванням).
//Якщо 2 параметр менше, ніж довжина вихідного рядка, то виводимо вихідний рядок без змін. Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.


function padString(str = 'Ivan', length = 6, symbol = '*', toLeft = false) {
    if (length <= str.length)
        return str;
    return toLeft ? str.padStart(length, symbol) : str.padEnd(length, symbol);
}

console.log(padString());
console.log(padString("Hillel", 10, '!', true));


//HW06 task03
//Вам необхідно написати функцію camelCase(str, separator), яка приймає на вхід рядок і перетворює його до формату camelCase.

const camelCase = (str = 'Hillel School', separator = ' ') =>
    str.charAt(0).toLowerCase() + str.slice(1).replaceAll(separator, '');

console.log(camelCase());
console.log(camelCase('Earth-Ukraine-Odessa-Deribasovskaya', '-'));
console.log(camelCase('big.bang.theory', '.'));

//HW07 task01
//Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.

const originalArray = [1, 2, 3, 4, 5];

const reverseArray = (arr) => arr.slice().reverse();
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