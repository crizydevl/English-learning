/**
 * 选择排序(Selection Sort)
 * 在序列中寻找最小（最大）的数，放到起始位置，在到剩余序列中继续寻找，知道完成
 * 时间复杂度: O(n^2)
 */


const defaultArr = [2, 3, 57, 23, 55, 1, 56, 10, 56, 2, 67, 6, 48, 31, 78, 21];

/**
 * 
 * @param {*} arr 
 */
function selectionSort1(arr) {
  const arrlen = arr.length;
  let lopCount = 0;
  let minIndex, temp;

  for (let i=0; i<arrlen-1; i++) {
    minIndex = i;
    for(let j=i+1; j<arrlen; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }

      lopCount ++;
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }

  console.log('lop count ', lopCount);
  return arr
}


console.log('selectionSort1 ', selectionSort1(defaultArr));