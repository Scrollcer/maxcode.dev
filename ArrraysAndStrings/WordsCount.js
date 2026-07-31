/*
Реализуйте функцию, которая принимает произвольное количество слов и объединяет их в одну строку.


console.log(formatWords()); // ""
console.log(formatWords("Natalie")); // "Natalie"
console.log(formatWords("Natalie", "Mila")); // "Natalie and Mila"
console.log(formatWords("Natalie", "Mila", "Vincent")); // "Natalie, Mila and Vincent"
console.log(formatWords("Natalie", "Mila", "Vincent", "Barbara")); // "Natalie, Mila, Vincent and Barbara"
*/

function formatWords() {
    let result = "";
    if (arguments.length === 0) return result;
    else if(arguments.length === 1) {
        result = arguments[0];
    } else {
        result += arguments[0];
        for (let i = 1; i < arguments.length - 1; i++) {
            result += `, ${arguments[i]}`;
        }
        result += ` and ${arguments[arguments.length - 1]}`
    }
    return result;
}
