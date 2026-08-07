/*
Реализуйте функцию decodeRLE, которая распаковывает сжатую строку, сжатую алгоритмом RLE.


console.log(decodeRLE("a4b6c3")); // "aaaabbbbbbccc"
console.log(decodeRLE("a10b2")); // "aaaaaaaaaabb"
console.log(decodeRLE("abc")); // "abc"
console.log(decodeRLE("abc11")); // "abccccccccccc"
*/

function decodeRLE(str) {
  let result = ``;

  let currentChar = "";
  let currentNumber = "";

  for(let i = 0; i < str.length; i ++) {
    if(Number(str[i]) || str[i] === "0") {
      currentNumber += str[i];
    } else {
        
      if(currentNumber) {
        for(let i = 0; i < Number(currentNumber) - 1; i++) {
          result += currentChar;
        }
      }
      currentNumber = "";
      result += currentChar;
      currentChar = str[i];
    }
  }

  if(currentNumber) {
    for(let i = 0; i < Number(currentNumber); i++) {
          result += currentChar;
    }
  } else {
    result += currentChar;
  }

  return result;
}
