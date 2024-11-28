//HW18 task1
//Напишіть функцію, яка приймає масив чисел як аргумент і повертає Promise.
//Promise має бути виконаний через 3 секунди і повернути суму всіх чисел із масиву.

function sumArrayPromise(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            resolve(sum);
        }, 3000);
    });
}

//sumArrayPromise([1, 2, 3, 4, 5]).then(console.log);

//HW18 task2
//Створіть функцію concurrentPromises, яка приймає масив промісів і максимальну кількість промісів, що виконуються одночасно.
//Функція має виконати проміси паралельно, але не більше зазначеної максимальної кількості. Результатом функції має бути масив результатів промісів.

function concurrentPromises(promises, maxConcurrent) {
    return new Promise((resolve, reject) => {
        let results = [];
        let index = 0;  // Индекс текущего Promise
        let activeCount = 0;  // Количество активних Promise
        let completed = 0;  // Количество завершенных Promise

        function runNext() {
            if (completed === promises.length) {
                return resolve(results); // Если все Promise завершились
            }

            // условие, если ещё остались Promise, которые нужно выполнить
            if (index < promises.length && activeCount < maxConcurrent) {
                const currentIndex = index++;
                activeCount++;

                promises[currentIndex]
                    .then(result => {
                        results[currentIndex] = result;
                        completed++;
                        activeCount--;

                        runNext();
                    })
                    .catch(reject);  // здесь ошибка
            }
        }

        for (let i = 0; i < maxConcurrent; i++) {
            runNext();
        }
    });
}

// concurrentPromises([
//     new Promise(resolve => setTimeout(() => resolve('Promise 1'), 1000)),
//     new Promise(resolve => setTimeout(() => resolve('Promise 2'), 500)),
//     new Promise(resolve => setTimeout(() => resolve('Promise 3'), 800))
// ], 2).then(console.log);
// Очікуваний результат через 1000 мс: ["Promise 1", "Promise 2"]
// Через 1300 мс: "Promise 3"

//HW18 task3
//Реалізуйте функцію sequenceAsync, яка приймає масив функцій-промісів asyncFunctions.
//Кожна функція-проміс приймає попередній результат як аргумент і повертає новий результат.
//Функція sequenceAsync має виконати проміси послідовно, передаючи результат попереднього промісу в наступний.
//Зверніть увагу, що вам потрібно надати реалізацію функції sequenceAsync, яка дозволяє виконувати довільну кількість функцій-промісів у правильному порядку.

async function sequenceAsync(asyncFunctions) {
    return asyncFunctions.reduce(async (previousPromise, currentFunction) => {
        const previousResult = await previousPromise;
        return currentFunction(previousResult);
    }, Promise.resolve());
}

// Приклад використання
const asyncFunctions = [
    async (prev) => {
        console.log("Функція 1:", prev);
        return "Результат після першої функції";
    },
    async (prev) => {
        console.log("Функція 2:", prev);
        return "Результат після другої функції";
    },
    async (prev) => {
        console.log("Функція 3:", prev);
        return "Результат після третьої функції";
    }
];

sequenceAsync(asyncFunctions)
    .then(result => {
        console.log("Фінальний результат:", result);
    })
    .catch(error => {
        console.error("Помилка:", error);
    });
