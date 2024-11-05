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



