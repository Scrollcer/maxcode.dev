/*
Напишите функцию, которая принимает предложение, состоящее из слов, разделенных пробелами, и возвращает длину самого короткого слова.


const str = "lorem ipsum dolor sit amet";

console.log(shortestWord(str)); // 3
*/

function shortestWord(str) {
  let minLength = Infinity;
  const splittedStr = str.split(" ");
  splittedStr.forEach((word) => {
    if(word.length < minLength) minLength = word.length
  })
  return minLength;
}
