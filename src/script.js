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