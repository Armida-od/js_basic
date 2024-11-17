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
const result = palindrome(22, 100);
console.log(result); // Виведе null або об'єкт з результатом та кількістю кроків

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