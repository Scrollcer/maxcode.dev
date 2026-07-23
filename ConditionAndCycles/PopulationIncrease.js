/*
Два максимальных числа
Дан массив с числами. Верните два наибольших числа из этого массива. Гарантируется, что в массиве находятся хотя бы два различных элемента.


const numbers = [8, 5, 6, 6, 10, 3, 19, 19, 10, 19, 7];
console.log(twoMaxNumbers(numbers)); // [19, 10];
*/

function yearsToTarget(
  initialPopulation,
  naturalIncrease,
  immigration,
  targetPopulation,
) {
  let years = 0;

  while(initialPopulation < targetPopulation) {
    console.log(initialPopulation)
    years++;
    initialPopulation *= (1 + naturalIncrease /100);
    initialPopulation = Math.floor(initialPopulation + immigration);
  }
  
  return years;
}
