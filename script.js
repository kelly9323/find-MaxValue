/* 
написати скрипт (можна функцію можна без), який виводить індекс 
максимального елемента в масиві. Якщо максимальних елементів 
декілька(значення однакові) - виводить індекс останнього
const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; => індекс 5

*/
const arrNums = [1, 9, 5, 6, 7, 9, 4, 6];

const maxElementArray = function (array) {
  let max;
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else {
      max = array[i] - 1;
    }
  }
  return max;
};

console.log(maxElementArray(arrNums));

//* * повертати кількість максимальних(однакових) елементів
//const arrNums = [1, 9, 5, 6 , 7, 9, 4, 6]; =>кількість  2

function returnNumberOfMaxEl(array) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      count++;
    }
  }
  return count;
}
console.log(returnNumberOfMaxEl(arrNums));
