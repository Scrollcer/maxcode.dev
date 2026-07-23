/*
Реализуйте функцию reverseString, принимающую строку и возвращаюую новую строку, в которой символы исходной строки идут в обратном порядке.


console.log(reverseString("maxcode.dev")); // "ved.edocxam"
*/

function reverseString(test) {
  let result = "";
  for(let i = test.length -1; i >= 0; i--) {
    console.log(i)
    result += test[i];
  }

  return result;
}
