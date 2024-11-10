//HW10 task01 Вам необхідно використовувати масив нотифікацій з минулих занять.
//До отриманого під час групування об'єкта notifications, вам необхідно додати ітератор,
//щоб під час перебору в циклі for of ми отримували кожен елемент із вкладених списків об'єкта notifications таким чином,
//немов працюємо з "плоским" масивом.

const notifications = [
    { source: 'SMS', text: 'Air raid alarm', date: '01.11.2024' },
    { source: 'Call', text: 'Population survey', date: '02.11.2024' },
    { source: 'Telegram', text: 'Air raid alarm', date: '03.11.2024' },
    { source: 'Telegram', text: 'Payment of utility services', date: '04.11.2024' },
    { source: 'SMS', text: 'Mobile phone account top-up', date: '05.11.2024' }
];

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

