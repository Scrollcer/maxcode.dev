/*
Дан массив строк, реализуйте функцию countSmileys которая считает количество смайликов.

Смайлик — это строка, состоящая из символа глаз, символа рта и опционально символа носа между ними. Например, ":-)".

Глаза могут быть символом ":" или ";"
Нос может быть символом "-" или "~" или отсутствовать
Рот может быть символом ")" или "D"

console.log(countSmileys([":-)", ";D", ".(", ")))"])); // 2
*/
function countSmileys(arr) {
  let result = 0;

  for(let smile of arr) {
    if(smile.length <= 1) continue;

    if(smile[0] === ":" || smile[0] === ";") {
      if(smile.length === 2 || (smile.length === 3 && (smile[1] === "-" || smile[1] === "~"))) {
        if(smile[smile.length - 1] === ")" || smile[smile.length - 1] === "D") result++;
      }
    }
  }

  return result;
}
