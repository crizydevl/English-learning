/**
 * 二分查找(折半查找算法/对分查找)
 * 主要针对有序数据集合，每次通过和中间元素对比，使区间缩小一半， 直到找到要找到的元素，或者区间缩小为0
 * 时间复杂度为 O(logn)
 */
const defaultArr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102];
const defaultArr1 = [1, 1, 5, 6, 7, 8, 11, 11, 11, 42, 44, 54, 56, 77, 102]

/**
 * 简单二分查找
 * 数据必须有序，且不存在重复元素
 * @param {array<number>} arr 
 * @param {number} target 
 */
function binarySearch1(arr, target) {
  if (arr.length <= 1) {
    return -1
  }

  let startIndex = 0;
  let endIndex = arr.length - 1;

  while(startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex)/2);
    const midData = arr[midIndex];
    if (target < midData) {
      endIndex = midIndex - 1;
    } else if (target > midData) {
      startIndex = midIndex + 1;
    } else {
      return midIndex
    }
  }

  return -1
}

/**
 * 二分查找1, 返回找到的第一个值
 * 有序数据中，存在重复数据
 * @param {array<number>} arr 
 * @param {number} target 
 */
function binarySearch2(arr, target) {
  if (arr.length <= 1) {
    return -1
  }

  let startIndex = 0;
  let endIndex = arr.length - 1;

  while(startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex)/2);
    const midData = arr[midIndex];
    if (target < midData) {
      endIndex = midIndex - 1;
    } else if (target > midData) {
      startIndex = midIndex + 1;
    } else {
      if (midIndex == 0 || arr[midIndex-1] < target) {
        return midIndex
      } 

      endIndex = midIndex - 1;
    }
  }

  return -1
}

/**
 * 二分查找1, 返回找到的最后一个值
 * 有序数据中，存在重复数据
 * @param {array<number>} arr 
 * @param {number} target 
 */
function binarySearch3(arr, target) {
  if (arr.length < 1) {
    return -1
  }

  let startIndex = 0;
  let endIndex = arr.length - 1;

  while(startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex)/2);
    const midData = arr[midIndex];
    if (target < midData) {
      endIndex = midIndex - 1;
    } else if (target > midData) {
      startIndex = midIndex + 1;
    } else {
      if (midIndex == 0 || arr[midIndex+1] > target) {
        return midIndex
      } 

      startIndex = midIndex + 1;
    }
  }

  return -1
}


console.log('简单二分查找： ', binarySearch1(defaultArr, 6))
console.log('二分查找第一个值: ', binarySearch2(defaultArr1, 11))
console.log('二分查找最后一个值: ', binarySearch3(defaultArr1, 11))