/* 
написати скрипт (можна функцію можна без), який виводить індекс 
максимального елемента в масиві. Якщо максимальних елементів 
декілька(значення однакові) - виводить індекс останнього
const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => індекс 5

*/
const arrNums = [1, 9, 5, 6, 7, 9, 4, 6];

const maxElementArray = function (array) {
  let i, max;
  max = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] >= array[max]) {
      max = i;
    }
  }
  return max;
};
console.log(maxElementArray(arrNums));

//* * повертати кількість максимальних(однакових) елементів
//const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; =>кількість  2

function returnNumberOfMaxEl(array) {
  let maxIndex = maxElementArray(arrNums);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[maxIndex]) {
      count++;
    }
  }
  return count;
}
// debugger
console.log(returnNumberOfMaxEl(arrNums));
