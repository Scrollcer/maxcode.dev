/*
Реализуйте функцию, которая по полному имени, состоящему из имени и фамилии, возвращает инициалы:


console.log(abbrevName("Natalie Portman")); // "N.P."
Гарантируется, что полное имя состоит из двух слов, разделенных одним пробелом.
*/

function abbrevName(name) {
  const words = name.split(" ");

  let result = "";

  console.log(words)

  words.forEach((word)=> {
    result+= `${word[0]}.`; 
  })

  return result;
}
