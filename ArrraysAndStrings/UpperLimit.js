/*
Проверьте, что все числа массива arr не больше числа limit.


console.log(smallEnough([1, 2, 3], 5)); // true
console.log(smallEnough([-5, 5], 5)); // true
console.log(smallEnough([1, 12, 3], 5)); // false
*/

function smallEnough(numbers, limit) {
  return !numbers.filter((number) => number > limit).length > 0;
}
