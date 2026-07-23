/*
Дан массив с массивами строк matrix и минимальное значение min.

Определите, есть ли в этом массиве хотя бы одна строка длины не меньшее min.


const matrix = [
    ["lorem", "ipsum", "dolor", "sit", "amet"],
    ["consectetur", "adipiscing", "elit", "mauris", "urna"],
    ["mauris,", "accumsan", "quis", "mauris", "in"],
];

console.log(searchValue(matrix, 6)); // true
console.log(searchValue(matrix, 11)); // true
console.log(searchValue(matrix, 200)); // false
*/

function searchValue(matrix, min) {
  for(let arr of matrix) {
    for(let val of arr) {
      if(val.length >= min) return true;
    }
  }

  return false;
}
