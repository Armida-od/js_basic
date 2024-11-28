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
