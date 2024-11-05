//HW09 task01
//Вам необхідно написати функцію, яка приймає на вхід масив чисел і повертає новий масив, що містить тільки ті числа, які є простими числами.

function isSimpleNumber(number) {
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}
const arrNumber = [1, 0, 7, 11, 35, 20, 29, 50];

arrSimpleNumbers = arr => arr.filter(isSimpleNumber);
console.log(arrSimpleNumbers(arrNumber));

//HW09 task02
//Вам необхідно написати функцію, яка приймає на вхід масив об'єктів, де кожен об'єкт описує сповіщення та має поля source / text / date.
//Вам необхідно перетворити цей масив на об'єкт, де ключем буде джерело сповіщення, а значенням - масив сповіщень із цього джерела.

const notifications = [
    { source: 'SMS', text: 'Air raid alarm', date: '01.11.2024' },
    { source: 'Call', text: 'Population survey', date: '02.11.2024' },
    { source: 'Telegram', text: 'Air raid alarm', date: '03.11.2024' },
    { source: 'Telegram', text: 'Payment of utility services', date: '04.11.2024' },
    { source: 'SMS', text: 'Mobile phone account top-up', date: '05.11.2024' }
];

groupNotifications = arr => Object.groupBy(arr, item => item.source);
console.log(groupNotifications(notifications));

//HW09 task03
//Вам необхідно написати функцію, яка приймає на вхід масив і повністю повторює поведінку методу масиву group
//Предыдущая задача без использования group

const notes = [
    { source: 'SMS', text: 'Air raid alarm', date: '01.11.2024' },
    { source: 'Call', text: 'Population survey', date: '02.11.2024' },
    { source: 'Telegram', text: 'Air raid alarm', date: '03.11.2024' },
    { source: 'Telegram', text: 'Home payments', date: '04.11.2024' },
    { source: 'SMS', text: 'Mobile phone account', date: '05.11.2024' }
];

function withoutGroupNotes(arr) {
    return arr.reduce((acc, {source, ...rest}) => {
        if (!acc[source]) {
            acc[source] = [];
        }
        acc[source].push({source, ...rest});
        return acc;
    }, {});
}
console.log(withoutGroupNotes(notes));