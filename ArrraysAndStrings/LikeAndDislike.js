/*
Как работают кнопки лайка и дислайка на ютубе? Изначально ни одна из них не выбрана. Если вы нажимаете на кнопку лайк, то она становится активной. Если вы нажмете на нее еще раз, то она отожмется и активной кнопки не будет.

Если изначально нажать на лайк, а потом на дислайк, то активной будет только кнопка дислайка. Кнопка лайка будет неактивной, т.к. активной может быть только одна кнопка.

Определите, какая кнопка будет выбрана после серии нажатий. Считаем, что изначально ни одна кнопка не выбрана.


console.log(likeOrDislike(["Dislike"])); // "Dislike"
console.log(likeOrDislike(["Like", "Like"])); // "Nothing"
console.log(likeOrDislike(["Dislike", "Like"])); // "Like"
console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // "Nothing"
*/

function likeOrDislike(buttons) {
  const nothing = "Nothing"

  let current = nothing;

  buttons.forEach((button)=> {
    if(current === button) current = nothing;
    else current = button;
  });

  return current;
}
