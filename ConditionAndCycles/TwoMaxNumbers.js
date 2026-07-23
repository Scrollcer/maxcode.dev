/*
Дан массив с числами. Верните два наибольших числа из этого массива. Гарантируется, что в массиве находятся хотя бы два различных элемента.


const numbers = [8, 5, 6, 6, 10, 3, 19, 19, 10, 19, 7];
console.log(twoMaxNumbers(numbers)); // [19, 10];
*/

function twoMaxNumbers(numbers) {
  const firstResult = Math.max(...numbers);

  const secondArr = numbers.filter((val) => {
    return val !== firstResult;
  });

  const secondResult = Math.max(...secondArr);

  return [firstResult, secondResult];
}
