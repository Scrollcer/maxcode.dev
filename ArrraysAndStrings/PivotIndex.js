/*
Дан массив чисел. Необходимо найти индекс элемента такого, что сумма чисел слева от него равна сумме чисел справа от него. Если такого элемента нет, вернуть -1.

Если таких индексов несколько, вернуть минимальный.

Примеры

//            0  1  2  3  4  5  6
//           -----------     ----
const arr1 = [4, 2, 1, 3, 7, 6, 4];

pivotIndex(arr1) === 4
Слева от числа 7 сумма чисел равна 4 + 2 + 1 + 3 === 10. Справа сумма равна 6 + 4 === 10. Индекс числа 7 равен 4.


const arr2 = [4, 2, -5, 3];

pivotIndex(arr2) === 0
Слева от числа 4 нет элементов, поэтому их сумма равна 0. Справа от него три элемента с общей суммой 2 + -5 + 3 === 0. Поэтому возвращаем индекс этого числа — 0.
*/

function pivotIndex(arr) {
    for(let i = 0; i < arr.length; i++ ) {
        const arrCopy = [...arr];
        const sumAfterNumber = arrCopy.splice(i).reduce((acc, curr) => acc + curr) - arr[i];
        const sumBeforeNumber = arrCopy.splice(0, i).reduce((acc, curr) => acc + curr, arr[i]) - arr[i];
        if(sumAfterNumber === sumBeforeNumber) return i;
    }

    return -1;
}

