/*
Реализуйте функцию topWords, которая возвращает массив слов из массива words, подходящих под запрос query.

Функция принимает три аргумента:

words — массив строк;
query — строка, с которой должны начинаться искомые слова;
limit — максимальное количество слов, которое нужно вернуть.
Поиск должен быть регистронезависимым. Например, слово "About" подходит под запрос "ABO". В итоговом массиве слова должны быть в том же регистре, в каком были в исходном массиве.

Если подходящие слов больше, чем limit, то нужно вернуть первые limit подходящих слов из массива. Если меньше — вернуть все.


const words = [
  "a",
  "able",
  "about",
  "absolute",
  "accept",
  "account",
  "achieve",
  "across",
  "act",
  "active",
  "actual",
  "add",
  "address",
  "Admit",
  "Advertise",
  "Affect",
  "AFFORD",
  "after",
  "afternoon",
  "again",
  "against",
  "age",
  "agent",
  "ago",
  "agree",
];

console.log(topWords(words, "Af", 3)); // ['Affect', 'AFFORD', 'after']
console.log(topWords(words, "aga", 5)); // ['again', 'against']
*/

function topWords(words, query, limit) {
  let result = [];
  
  words.forEach((word)=> {
    if(word.toLowerCase().startsWith(query.toLowerCase()) && result.length < limit) {
      result.push(word);
    }
  })
  
  return result;
}
