/*
Максимальное число
Реализуйте функцию max, которая принимает массив чисел и возвращает максимальное число в этом массиве.


console.log(max([3, 6, 1, 5])); // 6
*/

function max(numbers) {
  let max = -999999;

  for(let val of numbers) {
    if(val > max) max = val;
  }

  return max;
}
