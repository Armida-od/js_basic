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