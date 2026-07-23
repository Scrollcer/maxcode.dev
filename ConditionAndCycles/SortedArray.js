/*
Когда мы говорим про то, что массив отсортирован, то используются следующие понятия:

возрастающий: каждый элемент больше предыдущего ([-3, 0, 1, 6, 100]);
убывающий: каждый элемент меньше предыдущего ([1005, 30, 7, -12, -88]);
неубывающий: каждый элемент больше или равен предыдущего ([5, 6, 6, 8, 19, 19, 100]);
невозрастающий: каждый элемент меньше или равен предыдущего ([50, 40, 40, 33, 7, 7, 7, -4]);
монотонный: массив является неубывающим или невозрастающим;
строго монотонный: массив является возрастающим, либо убывающим.
Реализуйте функцию, проверяющую, что массив строго монотонный.


console.log(isStrictlyMonotonic([1])); // true
console.log(isStrictlyMonotonic([1, 7, 10])); // true
console.log(isStrictlyMonotonic([-6, -10, -777])); // true

console.log(isStrictlyMonotonic([5, 7, 7, 7, 9])); // false
console.log(isStrictlyMonotonic([1,3,2])); // false
*/

function isStrictlyMonotonic(numbers) {
  let numbersCopy = [...numbers]

  let hasDublicates = new Set(numbersCopy).size !== numbersCopy.length;


  return (numbersCopy.sort((a,b)=> a-b).every((val, i) => val === numbers[i]) || numbersCopy.sort((a,b)=> b-a).every((val, i) => val === numbers[i])) && !hasDublicates;
}
