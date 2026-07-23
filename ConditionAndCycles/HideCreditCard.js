/*
Для защиты данных пользователя необходимо показывать только последние 4 цифры номера кредитной карты. Остальные цифры необходимо закрыть символом #.

Обычно длина номера карты составляет 16 символов, но мы хоти написать универсальную функцию, которая работает для любого номера.


console.log(maskify("4556364607935616")); // "############5616"
console.log(maskify("123456789")); // "#####6789"
console.log(maskify("789")); // "789"
*/

function maskify(cc) {
  if (cc.length <= 4) return cc;

  const lastPart = cc.slice(cc.length-4);
  const firstPart = cc.slice(0, cc.length-4).replace(/./g, '#');

  return firstPart + lastPart;
}
