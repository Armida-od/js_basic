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
