/*
Для данной строки верните массив с индексами символов больших букв (A, B, ..., Z).


console.log(findCapitals("MaxCode")); // [0, 3]
*/

function findCapitals(word) {
  const result = [];

  for(let i = 0; i < word.length; i++) {
    if(word[i]!== word[i].toLowerCase() && word[i] === word[i].toUpperCase()) result.push(i);
  }

  return result;
}
