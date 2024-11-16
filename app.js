/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }   
}


//Exercise 2

const isAdult = (x) => {
    if (x >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log(isAdult(21));
console.log(isAdult(17));
console.log(isAdult(22));
console.log(isAdult(8));





//Exercise 3
// write a function to take in a character, so that, 
// if this character is 'a' or 'e', or 'i' or 'o' or 'u' then return True, else return False

const isCharAVowel = (letter) => {
    if (letter == 'a') {
        return "True"; 
        // return true;
    } else if (letter == 'e') {
        return "True";
    } else if (letter == 'i') {
        return "True";
    } else if ( letter == 'o') {
        return "True";
    } else if ( letter == 'u') {
        return "True";
    }
    else {
        return "False";
    }
}


let a = 'a';
console.log(isCharAVowel(a));
console.log(isCharAVowel('e'));
console.log(isCharAVowel('i'));
console.log(isCharAVowel('o'));
console.log(isCharAVowel('u'));
console.log(isCharAVowel('s'));
console.log(isCharAVowel('x'));



//Exercise 4

function generateEmail(name, domain) {
    return `${name}@${domain}`;
}

const email = generateEmail('alixdaniel', 'gmail.com');
console.log(email);


//Exercise 5

function greetUser(name, timeOfDay) {
    return `Top of the ${timeOfDay}, ${name}!`;
}

const greeting = greetUser('Alix!', 'morning');
console.log(greeting);

//Exercise 6

function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

const largest = maxOfThree(2, 48, 9);
console.log(largest);

//Exercise 7

function calculateTip(billAmount, tipPercentage) {
    return billAmount * (tipPercentage / 100);
}

const tip = calculateTip(98, 15);
console.log(tip);

//Exercise 8

function convertTemperature(temp, scale) {
    if (scale === 'C') {
        return (temp * 9/5) + 32;
    } else if (scale === 'F') {
        return (temp - 32) * 5/9;
    } else {
        return null;
    }
}

console.log(convertTemperature(40, 'C'));
console.log(convertTemperature(41, 'F'));

//Exercise 9

function basicCalculator(num1, num2, operation) {
    if (operation === 'add') return num1 + num2;
    if (operation === 'subtract') return num1 - num2;
    if (operation === 'multiply') return num1 * num2;
    if (operation === 'divide') return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
    return 'Error: Syntax Error';
}

console.log(basicCalculator(10, 11, 'subtract'));
console.log(basicCalculator(9, 5, 'add'));
console.log(basicCalculator(2, 5, 'multiply'));
console.log(basicCalculator(10, 5, 'divide'));
console.log(basicCalculator(10, 0, 'divide'));

