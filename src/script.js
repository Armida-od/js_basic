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