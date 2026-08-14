/*
Функция incrementAge принимает объект с информацией о человеке, в том числе его возраст (поле age).

Нужно вернуть новый объект такого же формата, где возраст будет увеличен на 1. Исходный объект не должен измениться.


const person = {
  name: "Joe",
  age: 82,
  gender: "male",
};

console.log(incrementAge(person));
// {
//   name: "Joe",
//   age: 83,
//   gender: "male",
// }
*/

function incrementAge(person) {
  let result = {...person};

  result.age++;

  return result;
}
