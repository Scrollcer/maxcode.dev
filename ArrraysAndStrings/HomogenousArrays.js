/*
Однородный массив — массив состоящий из элементов одного типа (например, только строки или только числа).

Реализуйте функцию filterHomogenous, которая принимает массив массивов и возвращает массив непустых гомогенных массивов.


console.log(filterHomogenous([
  [1, 2, 3],
  [],
  [5, true, 8],
  ["qwe", "yyy"],
  ["uio", 6],
])); // [[1, 2, 3],  ["qwe", "yyy"]]
*/

function filterHomogenous(arrays) {
  const result = [];

  arrays.forEach((array) => {
    if(array.length === 0) return;
    const instanceType = typeof(array[0]);
    let isHomogenous = true;

    array.forEach((item)=> {
      if(typeof(item) !== instanceType) {
        isHomogenous = false;
        return;
      }
    });

    if(isHomogenous) result.push(array);
  })

  return result;
}
