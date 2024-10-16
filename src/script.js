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

