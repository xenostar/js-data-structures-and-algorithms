const minSubArrayLen = (arr: number[], num: number) => {
  // set some pointers
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLength = Infinity;

  while (start < arr.length) {
    // if sum is less than num, add current arr[start] to sum and start++
    if (sum < num && end < arr.length) {
      sum = sum + arr[end];
      end++;
    }
    // if sum is >= than num, set minLength, subtract current arr[end] from sum and end++
    else if (sum >= num) {
      minLength = Math.min(minLength, end - start);
      sum = sum - arr[start];
      start++;
    }
    // otherwise, break out
    else {
      break;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

// 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 3, 1, 2, 4, 3], 7); //?
// 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([2, 1, 6, 5, 4], 9); //?
// 1 -> because [62] is greater than 52
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); //?
// 3
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); //?
// 5
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); //?
// 2
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); //?
// 0
// minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); //?
