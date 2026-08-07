/*
RLE (Run-length encoding) — алгоритм сжатия теста.

Алгоритм очень простой. Если какая-то буква повторяется несколько раз подряд, то ее можно заменить на букву + количество повторений. Например, "AAAAA" превращается в "A5". Даже если буква встречается два раза, то длиннее мы не сделаем.

Если буква не повторяется, заменять ее не нужно, т.к. смысла в этом нет.


console.log(encodeRLE("aabbbccccc")); // "a2b3c5"
console.log(encodeRLE("aaaaaaaaaax")); // "a10x"
Разумеется, алгоритм сжатия должен быть устроен так, чтобы была возможность разжать обратно и получить оригинальный текст. Для алгоритма RLE это нужно сделать в задаче rle-decode.
*/

function encodeRLE(str) {
  let result = `${str[0]}`;

  let currentCharCount = 1;
  let currentChar = str[0];

  for(let i = 1; i < str.length; i ++) {
    if(str[i] === currentChar) currentCharCount++;
    else {
      if (currentCharCount > 1) result += currentCharCount;
      currentCharCount = 1;
      currentChar = str[i];
      result += currentChar;
    }
  }

  if(currentCharCount > 1) result += currentCharCount;

  return result;
}
