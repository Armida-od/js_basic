//HW05 task01: Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.

function reverseString(str = 'Ivan'){

    console.log(`Ваша строка ${str}`);
    let newStr = str.split('', str.length).reverse().join('');
    console.log(`Ваше слово наоборот будет: ${newStr}`);
}

reverseString();
reverseString('Anastasiia');
console.log('_____________________\n');
//HW05 task02: Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.

function isPalindrome(str = 'level'){

    console.log(`Ваша строка "${str}"`);
    let onlySymbolStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reverseStr = onlySymbolStr.split('', str.length).reverse().join('');

    onlySymbolStr === reverseStr
    ? console.log(`Cтрока "${str}" является палидромом`)
    : console.log(`Cтрока "${str}" не является палидромом`);

}
isPalindrome();
isPalindrome('Madam, I\'m Adam');
isPalindrome('Hillel school');