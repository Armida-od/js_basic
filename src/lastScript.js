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

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];

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


//HW09 task01
//Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, що містить тільки ті числа, які є простими числами.

function isSimpleNumber(number) {
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}
const arrNumber = [1, 0, 7, 11, 35, 20, 29, 50];

arrSimpleNumbers = arr => arr.filter(isSimpleNumber);
console.log(arrSimpleNumbers(arrNumber));

//HW09 task02
//Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує сповіщення та має поля source / text / date.
//Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.

const notifications = [
    { source: 'SMS', text: 'Air raid alarm', date: '01.11.2024' },
    { source: 'Call', text: 'Population survey', date: '02.11.2024' },
    { source: 'Telegram', text: 'Air raid alarm', date: '03.11.2024' },
    { source: 'Telegram', text: 'Payment of utility services', date: '04.11.2024' },
    { source: 'SMS', text: 'Mobile phone account top-up', date: '05.11.2024' }
];

groupNotifications = arr => Object.groupBy(arr, item => item.source);
console.log(groupNotifications(notifications));

//HW09 task03
//Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group
//Предыдущая задача без использования group

const notes = [
    { source: 'SMS', text: 'Air raid alarm', date: '01.11.2024' },
    { source: 'Call', text: 'Population survey', date: '02.11.2024' },
    { source: 'Telegram', text: 'Air raid alarm', date: '03.11.2024' },
    { source: 'Telegram', text: 'Home payments', date: '04.11.2024' },
    { source: 'SMS', text: 'Mobile phone account', date: '05.11.2024' }
];

function withoutGroupNotes(arr) {
    return arr.reduce((acc, {source, ...rest}) => {
        if (!acc[source]) {
            acc[source] = [];
        }
        acc[source].push({source, ...rest});
        return acc;
    }, {});
}
console.log(withoutGroupNotes(notes));


//HW10 task01 Вам необхідно використовувати масив нотифікацій з минулих занять.
//До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор,
//щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків об'єкта notifications таким чином,
//немов працюємо з "плоским" масивом.

// const notifications = [
//     { source: 'SMS', text: 'Air raid alarm', date: '01.11.2024' },
//     { source: 'Call', text: 'Population survey', date: '02.11.2024' },
//     { source: 'Telegram', text: 'Air raid alarm', date: '03.11.2024' },
//     { source: 'Telegram', text: 'Payment of utility services', date: '04.11.2024' },
//     { source: 'SMS', text: 'Mobile phone account top-up', date: '05.11.2024' }
// ];

function groupNotifications(arr) {
    const grouped = arr.reduce((acc, { source, ...rest }) => {
        if (!acc[source]) {
            acc[source] = [];
        }
        acc[source].push({ source, ...rest });
        return acc;
    }, {});

    grouped[Symbol.iterator] = function() {
        let flatArray = Object.values(this).flat();
        let index = 0;

        return {
            next() {
                return index < flatArray.length
                    ? { value: flatArray[index++], done: false }
                    : { done: true };
            }
        };
    };
    return grouped;
}
const groupedNotifications = groupNotifications(notifications);
for (const notification of groupedNotifications) {
    console.log(notification);
}

//HW10 task02 Вам необхідно реалізувати функцію memoize(fn), яка приймає вхід функцію і додає їй можливість кешування результатів виконання,
//щоб уникнути повторних обчислень. Це означає, що в разі, коли функція викликається з однаковими параметрами,
//то результат необхідно брати з кешу. (Тільки примітиви у параметрах та використовуйте Map)
//HW10 task03
//Встановіть обмеження на розмір кеша у вигляді числа N.
//Якщо це значення перевищено, то вам необхідно перезаписати перше значення, потім друге і так далі.

function memoize(fn, maxCacheSize = 100) {
    const cache = new Map();
    const queue = [];
    const uniqueResults = new Set();

    return function(...args) {
        //Преобразование аргументов в строковое представление в формате JSON
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);

        if (!uniqueResults.has(result)) {
            // Добавление в кеш элемента
            cache.set(key, result);
            queue.push(key);
            uniqueResults.add(result);

            //Проверка розмера кеша и удаления самого старого кеша
            if (queue.length > maxCacheSize) {
                const oldestKey = queue.shift();
                cache.delete(oldestKey);
                uniqueResults.delete(cache.get(oldestKey));
            }
        }
        return result;
    };
}
//Применение функции memoize для вычисления функции calculateCircle
function calculateCircle(radius) {
    return Math.PI * radius * radius;
}
const memoizedCircle = memoize(calculateCircle);
console.log(memoizedCircle(30));


console.log("HW11 task01")
//Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію і додає можливість логувати всі аргументи, передані у функцію-аргумент.

function logArguments(fn){
    return function(...args) {
        console.log(`Функция ${fn.name} принимает параметры:`, args);
        return fn(...args);
    };
}

//Применение функции logArguments для вычисления функции calculateVolumeParallelepiped
const calculateVolumeParallelepiped = (height, width, length) => height * width * length;

const loggedCalculateCircle = logArguments(calculateVolumeParallelepiped);
loggedCalculateCircle(20, 30, 50);


console.log("--------------  \nHW11 task02")
//Вам необхідно написати функцію-декоратор validate(fn, validator), яка приймає на вхід функцію і додає можливість перевіряти аргументи,
//передані у функцію fn, на відповідність заданому validator. Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.

function validate(fn, validator) {
    return function(...args) {
        if (!validator(...args)) {
            throw new Error('Аргументы не являются числами.');
        }
        return fn(...args);
    };
}

const isAllNumbers = (...args) => args.every(arg => typeof arg === 'number');

//Применение валидации функции calculateVolumeCylinder
const calculateVolumeCylinder = (radius, height) => Math.PI * Math.pow(radius, 2) * height;

const validated = validate(calculateVolumeCylinder, isAllNumbers);

try {
    console.log(validated(2, 3));
    console.log(validated('15', '2'));
} catch (error) {
    console.error(error.message);
}

console.log("-------------- \nHW11 task03")
//Вам необхідно написати функцію-декоратор retry(fn, maxAttempts), яка приймає на вхід функцію
//і додає можливість викликати функцію з максимальною кількістю спроб у разі помилки та повертає результат останнього виклику.
function retry(fn, maxAttempts) {
    return function(...args) {
        for (let item = 1; item <= maxAttempts; item++) {
            try {
                const result = fn(...args);
                console.log(`Число ${result} находится в диапазоне от 1 до 10`);
                return result;
            } catch (error) {
                console.error(`Попытка ${item} не удалась:`, error);
            }
        }
        throw new Error(`Исчерпаны все попытки ${maxAttempts} `);
    };
}

function checkNumber(num) {
    if (num < 1 || num > 10) {
        throw new Error(`Число ${num} не находится в диапазоне от 1 до 10`);
    }
    return num;
}

const retryCheckNumber = retry(checkNumber, 3);

retryCheckNumber(5);
retryCheckNumber(51);

//Для себя!!! '^' указывает на строку, где мы явно генерируем исключение, а не на те строки, где происходили предыдущие ошибки.

console.log("HW12 task01")
//Вам необхідно написати функцію summarize(num), яка приймає на вхід число і повертає функцію, яка під час виклику додає це число до аргументу
//і повертає результат. Якщо аргумент не передано, то додається одиниця.
//Наприклад, якщо функція викликається з аргументом 5, то функція, що повертається,
//повинна при виклику з аргументом 3 повернути 8 (тому що 3 + 5 = 8) або 6, якщо аргумент не буде передано.

function Summarizer(num) {
    this.num = num;
    this.sum = function(item = 1) {
        return this.num + item;
    };
}

const result = new Summarizer(5);
console.log(result.sum(3));
console.log(result.sum());

console.log("--------------  \nHW11 task02")
//Вам необхідно написати функцію counter(startValue, step), яка приймає на вхід два параметри - стартове значення лічильника і його крок.
//Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення.
//Лічильник повинен мати методи increment, decrement і reset, які збільшують або зменшують значення на step і скидають значення до стартового, відповідно.

function counter(startValue, step){
    return {
        startValue,
        step,
        increment(){
            return startValue += step;
        },
        decrement(){
            return startValue -= step;
        },
        reset(){
            return startValue;
        }
    }
}

const generalCounter = counter(15, 5);

console.log(`Початкове значення лічильника: ${generalCounter.startValue}`);
console.log(`Лічильник збільшився на ${generalCounter.step} та став: ${generalCounter.increment()}`);
console.log(`Потім лічильник зменшився на ${generalCounter.step} та став: ${generalCounter.decrement()}`);
console.log(`Після скидання лічильника його значення повернулось до початкового: ${generalCounter.reset()}`);

console.log("-------------- \nHW11 task03")
//Вам необхідно написати функцію sequence(fn, fn), яка приймає на вхід дві або більше функції й повертає нову функцію, яка викликає їх послідовно з результатом попереднього виклику. Результат останньої функції має бути повернутий новою функцією.
//Кожна функція повинна мати доступ до результату попередньої функції через замикання.

// 1. sequence(...fns) принимает любое количество функций и возвращает новую функцию.
// 2. Новая функция вызывает входящие функции последовательно.
// 3. Результат каждой функции будет передаваться как аргумент следующий функции (через замыкание) и уже результат последней функции будет результатом выполнения нашей новой созданной функции.

function sequence(...fns) {
    return (...args) => fns.reduce((result, fn) => fn(result), ...args);
}

const yearlySalary = (salary) => salary * 12;
const salaryCoefficient = (salary) => salary * 3;
const tax = (salary) => salary - ((salary * 5)/100);

const totalSalary = sequence(yearlySalary, salaryCoefficient, tax);
console.log(`Total salary is ${totalSalary(1000)}`);


console.log("HW13 task03")
//Напишіть функцію, яка рекурсивно обчислює n-те число Фібоначчі.
//Числа Фібоначчі визначаються як послідовність, у якій кожне число дорівнює сумі двох попередніх чисел (наприклад, 0, 1, 1, 2, 3, 5, 8 і так далі).
//Використовуйте рекурсію для обчислення чисел Фібоначчі.
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    // Рекурсия:
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10))

console.log("--------------  \nHW13 task02")
//Числовий паліндром. Візьмемо будь-яке натуральне число і складемо його зі зворотним числом, тобто записаним тими самими цифрами, але у зворотному порядку.
//Проробимо ту саму дію з сумою, що вийшла, і будемо повторювати її доти, доки не утвориться паліндром. Іноді достатньо зробити всього один крок (наприклад, 312 + 213 = 525), але, як правило, потрібно не менше двох. Скажімо, число 96 породжує паліндром 4884 тільки на четвертому кроці....
//Вам потрібно написати функцію, яка повертатиме об'єкт, де буде властивість result і це буде паліндром, і властивість steps — це число викликів до знаходження паліндрома.
//Для того, щоб перевірити себе використовуйте число 196. Це так зване Lychrel number — число яке немає поліндрому

function reverseNumber(num) {
    return Number(num.toString().split('').reverse().join(''));
}

function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
}

function palindrome(num, step) {
    let steps = 0;
    while (steps < step) {
        num += reverseNumber(num);
        steps++;
        if (isPalindrome(num)) {
            return `Результат паліндрому - ${num}, рухів було - ${steps}`;
        }
    }
    return 'Паліндром не знайдено';
}

// Приклад використання:
// const result = palindrome(22, 100);
// console.log(result); // Виведе null або об'єкт з результатом та кількістю кроків

console.log("-------------- \nHW13 task03")
//Напишіть функцію, яка приймає масив унікальних елементів і генерує всі можливі перестановки цього масиву.
//Використовуйте рекурсію для знаходження всіх перестановок.
//Наприклад, якщо вхідний масив [1, 2, 3], функція має повернути масив, що містить [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2] і [3, 2, 1].

function permutationArray(arr){
    const perArr = [];
    if (arr.length === 1) {
        return [arr];
    }
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const newPerArr = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const permutations = permutationArray(newPerArr);

        for (let permutation of permutations) {
            perArr.push([current, ...permutation]);
        }
    }
    return perArr;
}

const arr = [1, 2, 3];
console.log(permutationArray(arr))


console.log("HW14")
//1. Вам необхідно створити конструктор Студента, у якого мають бути властивості: ім'я, прізвище, рік народження, оцінки, відвідуваність, курс.
//Кількість оцінок і відвіданих занять залежить від курсу, на якому займається студент.
//Так само у Студента є методи: додати оцінку, додати відвідування, отримати середню успішність, отримати середнє відвідування,
//отримати кількість пройдених занять, змінити курс (мають оновитися дані про курс), а також отримати всю інформацію про студента.
//2. Додати Студенту можливість навчатися на кількох курсах з можливістю додавання і видалення курсу.
//3. Створити конструктор Група, яка має список студентів і методи для додавання, видалення студентів, а також одержання рейтингу студентів за відвідуваністю і успішністю.

class Student {
    constructor({firstName, secondName, yearBirth, grades, attendance, courses}) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.yearBirth = yearBirth;
        this.grades = grades;
        this.attendance = attendance;
        this.courses = courses;
    }

    //Полная информация
    getFullStudent() {
        const courses = Object.keys(this.grades);
        let resultGrades = '';
        for (let i = 0; i < courses.length; i++) {
            const course = courses[i];
            const grades = Object.values(this.grades)[i];
            resultGrades += `на курсе ${course}: ${grades.join(', ')}; `;
        }

        let resultAttended = '';
        for (const course in this.attendance) {
            const attended = this.attendance[course];
            const max = this.courses[course].maxAttendance;
            const percentage = ((attended / max) * 100).toFixed(2);
            resultAttended += `\n* ${course}: ${attended} из ${max} (${percentage}%)`;
        }

        return `Студент ${this.firstName} ${this.secondName}, год рождения: ${this.yearBirth}.` +
            `\nОбучается на курсах: ${courses}` +
            `\nИмеет следующие оценки: ${resultGrades}` +
            `\nСтудент посетил: ${resultAttended}`

    }

    //Добавление оценки
    addRate(courseName, rate) {
        const gradeCourse = this.grades[courseName];
        if (gradeCourse) {
            if (typeof rate !== 'number') {
                return `Оценка должна быть числом.`;
            }

            // Проверяем и инициализируем массив оценок
            this.grades[courseName] = gradeCourse || [];
            gradeCourse.push(rate);

            return `Оценка ${rate} добавлена. Все оценки по курсу ${courseName}: ${gradeCourse.join(', ')}.`;
        } else {
            return `Курс ${courseName} не найден.`;
        }
    }
    //Добавление количества посещений
    addAttendance(courseName, addAtt = 1){
        const attendanceCourse = this.attendance[courseName];
        if (attendanceCourse) {
            if (addAtt === attendanceCourse.maxAttendance) {
                return `Студент посетил все занятия.`;
            }
            return `${addAtt} новых посещения добавлено. Было посещений: ${attendanceCourse}. После обновления общее количество посещений = ${attendanceCourse + addAtt}.`;
        } else {
            return `Курса ${courseName} не существует для этого студента.`;
        }
    }
    //Вывод средней оценки студента
    getAverageScore(courseName) {
        const grades = this.grades[courseName] || [];
        if (grades.length === 0) {
            return 'Нет оценок для этого курса';
        }
        const sum = grades.reduce((acc, grade) => acc + grade, 0);
        const average = sum / grades.length;
        return `Средняя оценка студента в курсе ${courseName} = ${average.toFixed(1)}`;
    }

    getAverageAttendance(courseName) {
        const course = this.attendance[courseName];
        if (!course) {
            return 'Нет данных о посещениях для этого курса';
        }
        return (`На курсе ${courseName} студент посетил ${(course * 100 / this.courses[courseName].maxAttendance).toFixed(1)}% занятий`);
    }

    getPassedLessons(courseName){
        const course = this.attendance[courseName];
        if (!course) {
            return 'Нет данных о посещениях для этого курса';
        }
        return (`На курсе ${courseName} студент посетил ${this.attendance[courseName]} занятий `);
    }

    changeCourse(otherCourseName) {
        if (!this.courses[otherCourseName]) {
            return `Курса ${otherCourseName} не существует`;
        }
        if (this.currentCourse) {

            delete this.courses[this.currentCourse];
        }
        this.currentCourse = otherCourseName;
        return `Курс изменился на "${otherCourseName}"`;
    }

    getCourses() {
        const courses = Object.keys(this.courses);
        if (courses.length === 0) {
            return 'Студент не записан ни на один курс.';
        }
        return 'Студент занимается на следующих курсах:\n' + courses.map((course, index) => `${index + 1}. ${course}`).join('\n');
    }

    addCourse(courseName, maxAttendance) {
        if (!this.courses[courseName]) {
            this.courses[courseName] = {
                maxAttendance,
                attendance: 0,
                grades: []
            };
            return `Курс ${courseName} добавлено и содержит ${maxAttendance} занятий`;
        } else {
            return `Студент уже учится на курсе ${courseName}.`;
        }
    }

    removeCourse(courseName) {
        if (this.courses[courseName]) {
            delete this.courses[courseName];
            return `Курс ${courseName} удалено.`;
        } else {
            return `Студент не учится на курсе ${courseName}.`;
        }
    }
}
const student1 = new Student({
    firstName: 'Андрей',
    secondName: 'Иванов',
    yearBirth: 2000,
    grades: {
        'JS developer': [60, 58, 75, 100],
        'QA Manual': [65, 78, 70, 90]
    },
    attendance: {
        'JS developer': 18,
        'QA Manual': 10
    },
    courses:{
        'JS developer': {maxAttendance: 20},
        'QA Manual': {maxAttendance: 18}
    }
});

const student2 = new Student({
    firstName: 'Игорь',
    secondName: 'Миланов',
    yearBirth: 1985,
    grades: {
        'JS developer': [70, 59, 85, 95],
        'QA Manual': [100, 78, 88, 90]
    },
    attendance: {
        'JS developer': 20,
        'QA Manual': 15
    },
    courses:{
        'JS developer': {maxAttendance: 20},
        'QA Manual': {maxAttendance: 18}
    }
});

const student3 = new Student({
    firstName: 'Элания',
    secondName: 'Свердлова',
    yearBirth: 2008,
    grades: {
        'JS developer': [90, 95, 93, 100],
        'QA Manual': [95, 100, 100, 98]
    },
    attendance: {
        'JS developer': 20,
        'QA Manual': 18
    },
    courses:{
        'JS developer': {maxAttendance: 20},
        'QA Manual': {maxAttendance: 18}
    }
});

console.log(student1.getFullStudent());
console.log('------------Методы, применимые к студенту на курсе \'JS developer\'------------')
console.log(student1.addRate('JS developer', 100));
console.log(student1.addAttendance('JS developer', 2));
console.log(student1.getAverageScore('JS developer'));
console.log(student1.getAverageAttendance('JS developer'));
console.log(student1.getPassedLessons('JS developer'));
console.log('~~~~~~~~~~~~~Изменение курса~~~~~~~~~~~~~')

console.log(student1.changeCourse('QA Manual'))

console.log(student1.getCourses());
console.log(student1.addCourse('Java Basic', 33));
console.log(student1.removeCourse('Java Basic'));

//Создание группы
console.log("~~~~~~~~~~~~~Class Group~~~~~~~~~~~~~")
class Group {
    constructor(name) {
        this.name = name;
        this.students = [];
    }
    getStudentsList() {
        if (this.students.length === 0) {
            return 'Группа пуста. Студентов нет.';
        } else {
            return this.students;
        }
    }
    addStudent(...students) {
        this.students.push(...students);

        console.log('Обновленный список студентов:');
        this.students.forEach(student => {
            return `Студент ${this.students.indexOf(student) + 1}:`;
        });
    }

    removeStudent(student) {
        const index = this.students.indexOf(student);

        if (index !== -1) {
            this.students.splice(index, 1);
            return `Студент ${student.firstName} ${student.secondName} удален.`;
        } else {
            return `Студент ${student.firstName} ${student.secondName} не найден.`;
        }
    }

    calculateRatings() {
        const results = [];
        this.students.forEach(student => {
            for (const course in student.grades) {
                const totalGrade = student.grades[course].reduce((sum, grade) => sum + grade, 0);
                const averageGrade = totalGrade / student.grades[course].length;
                const rating = Math.ceil(averageGrade / 10);

                const attendancePercentage = (student.attendance[course] / student.courses[course].maxAttendance) * 100;
                const attendanceRating = Math.ceil(attendancePercentage / 20); // Примерная шкала: каждые 20% посещаемости - 1 балл рейтинга

                results.push(`${student.firstName} ${student.secondName} получил рейтинг ${rating} по оценкам и ${attendanceRating} по посещаемости на курсе ${course}`);
            }
        });
        return results;
    }

}
const devs = new Group('Developers');

console.log(devs.getStudentsList());
devs.addStudent(student1, student2, student3);
console.log(devs.getStudentsList());
console.log(devs.removeStudent(student2));
console.log(devs.getStudentsList())
console.log(devs.calculateRatings())


console.log("HW15")
//Вам необхідно написати додаток Todolist, використовуючи синтаксис класів.
//1. Добавление таски: метод addTask, класс TodoList;
//2. Удаление таски: метод removeTask, класс TodoList;
//3. Редактирование таски: метод changeTask, класс Task;
//4. Полная информация по таске: метод getFullInfoTasks, класс Task;
//5. Получить весь список тасок: метод showTasks, класс TodoList;
//6. Отметить таску выполненной: метод taskDone, класс Task;
//7. Вывести количество всех тасок, а также выполненных/невыполненных: метод showTasks, класс TodoList;
//8. Поиск тасок по Title: метод searchTask, класс TodoList;
//9. Сортировка тасок по статусу: метод sortByStatus, класс TodoList;
//10.Создать дату создания/редактирования таски: метод getFullInfoTasks, класс Task;
//11.Поиск по дате: метод searchTaskByDate, класс TodoList
//12.Сортировка по дате: метод sortByDate, класс TodoList

class Task {
    constructor(id, title, status, creator) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.creator = creator;
        this.createdAt = Date.now();
        this.updatedAt = null;
    }
    updatedTime() {
        this.updatedAt = Date.now();
        localStorage.setItem(`task-${this.id}-updatedAt`, this.updatedAt);
    }
    changeTask(changeField, newValue) {
        if (changeField === 'creator') {
            this.creator = newValue;
        } else if (changeField === 'title') {
            this.title = newValue;
        } else {
            return `The task isn't updated. The field is undefined: ${changeField}`;
        }
        this.updatedTime();
        return `Task with ID: ${this.id} is updated.`;
    }
    taskDone() {
        if (this.status) {
            if (this.status !== 'Done') {
                this.status = 'Done';
                this.updatedTime();
                return `Status of task "${this.id}. ${this.title}" is changed to "Done"`;
            } else {
                return 'Task is already marked as Done.';
            }
        } else {
            return 'Task has no initial status.';
        }
    }
    getFullInfoTasks() {
        const formatDataCreated = new Date(this.createdAt).toLocaleString();
        const formatDataUpdate = new Date(this.updatedAt).toLocaleString();
        return `${this.id}. ${this.title} - Status: ${this.status} 
        -> Creator: ${this.creator} 
        -> Created: ${formatDataCreated}
        -> Updated: ${this.updatedAt ? formatDataUpdate : "This task wasn't updated"}`
    }
}
class TodoList {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        if (!task.id) {
            throw new Error('This task has not unique ID');
        }

        const storedCreatedAt = localStorage.getItem(`task-${task.id}-createdAt`);

        if (storedCreatedAt) {
            task.createdAt = parseInt(storedCreatedAt);
        } else {
            task.createdAt = Date.now();
            localStorage.setItem(`task-${task.id}-createdAt`, task.createdAt);
        }

        this.tasks.push(task);
    }
    showTasks() {
        if (this.tasks.length === 0) {
            return 'Tasks not found.';
        }

        const completedTasks = this.tasks.filter(task => task.status === 'Done').length;
        const incompleteTasks = this.tasks.length - completedTasks;
        const formattedTasks = this.tasks.map(task => `${task.id}. ${task.title}`);

        return `List of tasks:\n${formattedTasks.join('\n')}
All tasks: ${this.tasks.length}
Completed: ${completedTasks}
Uncompleted: ${incompleteTasks}`;
    }

    removeTask(task) {
        const index = this.tasks.findIndex(item => item.id === task.id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return `Task "${task.id}.${task.title}" is deleted.`;
        } else {
            return `Task "${task.id}.${task.title}" is not found.`;
        }
    }

    searchTaskByTitle(title) {
        const taskTitle = this.tasks.filter(task => task.title.toLowerCase().includes(title.toLowerCase()));

        if (taskTitle.length > 0) {
            const result = taskTitle.map(task => `${task.id}. ${task.title}`);
            return `Tasks include: "${title}":\n${result.join('\n')}`;
        } else {
            return `No tasks containing text "${title}" found.`;
        }
    }

    searchTaskByDate(dateString) {
        const inputDate = new Date(dateString);
        console.log("The tasks are found:");

        const inputDateISO = inputDate.toISOString().split('T')[0] + 'T' + inputDate.toISOString().split('T')[1].split('.')[0];
        const foundTasks = this.tasks.filter(task => {
            const taskCreateDate = new Date(task.createdAt);

            const createdDateISO = taskCreateDate.toISOString().split('T')[0] + 'T' + taskCreateDate.toISOString().split('T')[1].split('.')[0];
            return createdDateISO === inputDateISO
        });

        if (foundTasks.length > 0) {
            const formattedTasks = foundTasks.map(task => {
                return `${task.id}. ${task.title}. Date of created: ${inputDateISO}`;
            });

            return formattedTasks.join('\n');
        } else {
            return `The tasks aren't found.`;
        }
    }

    sortByStatus(idSort) {
        this.tasks.sort((taskA, taskB) => {
            const statusOrder = ['Created', 'InProgress', 'Done'];
            const aIndex = statusOrder.indexOf(taskA.status);
            const bIndex = statusOrder.indexOf(taskB.status);

            return idSort ? bIndex - aIndex : aIndex - bIndex;
        });

        const formattedTasks = this.tasks.map(task => `${task.id}. ${task.title} (Status: ${task.status})`);
        return formattedTasks.join('\n');
    }
    sortByDate(idSortDate) {
        const compareTasks = (taskA, taskB) => {
            return idSortDate ? taskB.createdAt - taskA.createdAt : taskA.createdAt - taskB.createdAt;
        };
        this.tasks.sort(compareTasks);
        const formattedTasks = this.tasks.map(task => {
            const date = new Date(task.createdAt);
            return `${task.id}. ${task.title} (Created: ${date.toLocaleString()})`;
        });
        return formattedTasks.join('\n');
    }
}

const task1 = new Task(1,'Create first task','Created','Freeman');
const task2 = new Task(2,'Create second task','Created','Smith');
const task3 = new Task(3,'To do HW15','Created','Ziablova');

const todoList = new TodoList();

todoList.addTask(task1);
todoList.addTask(task2);
todoList.addTask(task3);

console.log(todoList.showTasks());
console.log(task2.getFullInfoTasks())
console.log(todoList.searchTaskByDate('2024-11-23T15:07:33'))

//HW17
//Створіть функцію randomDelayPrint, яка прийматиме рядок message як аргумент і виводитиме кожну букву цього рядка з довільною затримкою від 0 до 1 секунди.
//Використовуйте setTimeout, щоб додати випадкову затримку перед виведенням кожної літери.


function randomDelayPrint(message) {
    // Устанавливаем задержки для каждой буквы
    const delays = [3000, 5000, 1000, 1000, 5000];
    let totalDelay = 0; // Накопленная задержка

    for (let i = 0; i < message.length; i++) {
        totalDelay += delays[i]; // Добавляем задержку текущей буквы к общей
        setTimeout(() => {
            console.log(message[i]);
        }, totalDelay);
    }
}

// Вызов функции
randomDelayPrint("Hello");

// Очікуваний результат (затримки між літерами будуть різними):
// H (невелика затримка) 3 сек
// e (велика затримка) 5 сек
// l (маленька затримка) 1 сек
// l (маленька затримка) 1 сек
// o (велика затримка) 5 сек


//HW17 task 2
//Створіть функцію debounce, яка приймає функцію зворотного виклику і затримку (в мілісекундах) як аргументи.
//Функція debounce повинна повертати нову функцію, яка викликає вихідну функцію тільки після того, як минула вказана кількість часу без викликів.
//Це дасть змогу ігнорувати часті виклики функції та виконувати її лише один раз через зазначену затримку після останнього виклику.

function debounce(callback, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

const expensiveOperation = () => console.log("Виконую складну операцію...");
const debouncedExpensiveOperation = debounce(expensiveOperation, 16000);
debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();
// Через 1 секунду після останнього виклику "Виконую складну операцію..." має бути виведене в консоль тільки один раз.


//HW17 task 3
//Створіть функцію intervalRace, яка прийматиме масив функцій та інтервал часу t у мілісекундах.
// Функція intervalRace має викликати кожну функцію з масиву по черзі через заданий інтервал часу t.
// Коли всі функції виконано, intervalRace має повернути масив із результатами.

function intervalRace(functions, t) {
    return new Promise((resolve) => {
        let results = [];
        let index = 0;

        const intervalId = setInterval(() => {
            if (index >= functions.length) {
                clearInterval(intervalId);
                resolve(results);
            } else {
                results.push(functions[index]());
                index++;
            }
        }, t);
    });
}

const func1 = () => "Result fun1";
const func2 = () => "Result fun2";
const func3 = () => "Result fun3";

intervalRace([func1, func2, func3], 5000).then((results) => {
    console.log("Results of functions:", results);
});


