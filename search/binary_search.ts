const binarySearch = (arr: number[], val: number) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const midValue = arr[midIndex];

    if (val === midValue) {
      return midIndex;
    } else if (val < midValue) {
      right = midIndex - 1;
    } else if (val > midValue) {
      left = midIndex + 1;
    }
  }

  return -1;
};

const middle = Math.floor((0 + 4) / 2); //?

// 1
binarySearch([1, 2, 3, 4, 5], 2); //?
// 2
binarySearch([1, 2, 3, 4, 5], 3); //?
// 4
binarySearch([1, 2, 3, 4, 5], 5); //?
// 0
binarySearch([1, 2, 3, 4, 5], 1); //?
// 0
binarySearch([1, 2], 1); //?
// 1
binarySearch([1, 2], 2); //?
