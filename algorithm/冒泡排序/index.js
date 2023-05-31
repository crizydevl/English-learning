/**
 * 冒泡排序 (Bubble Sort)
 * 遍历数组，每次比较两个数，如果第一个数大于第二个数，则交换位置，否则，则不变
 */


const defaultArr = [2, 3, 57, 23, 55, 1, 56, 10, 56, 2, 67, 6, 48, 31, 78, 21];

/**
 * 冒泡排序1, 时间复杂度： O(n^2)
 * @param {*} arr 
 * @returns 
 */
function bubbleSort1(arr) {
  let lopCount = 0;
  const arrLen = arr.length;
  for (let i=0; i<arrLen; i++) {
    for (let j=0; j<arrLen - 1 - i; j++) {
      const prevVal = arr[j];
      const nextVal = arr[j+1];

      if (prevVal > nextVal) {
        arr[j] = nextVal;
        arr[j+1] = prevVal;
      }

      lopCount ++;
    }
  }

  console.log('bubbleSort1 lop', lopCount)
  return arr
}

/**
 * 冒泡排序优化1 时间复杂度： O(n^2), 最好的时候为 O(n)
 * @param {*} arr 
 * @returns 
 */
function bubbleSort2(arr) {
  let lopCount = 0;
  const arrLen = arr.length;
  for (let i=0; i<arrLen; i++) {
    var isEnd = false;
    for (let j=0; j<arrLen - 1 - i; j++) {
      const prevVal = arr[j];
      const nextVal = arr[j+1];

      if (prevVal > nextVal) {
        arr[j] = nextVal;
        arr[j+1] = prevVal;
        isEnd = true;
      }

      lopCount ++
    }

    if (!isEnd) {
      break
    }
  }

  console.log('bubbleSort2 lop', lopCount)
  return arr
}

console.log('bubbleSort1 ', bubbleSort1(defaultArr));
console.log('bubbleSort2 ', bubbleSort2(defaultArr));