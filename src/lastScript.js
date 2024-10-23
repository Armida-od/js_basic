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