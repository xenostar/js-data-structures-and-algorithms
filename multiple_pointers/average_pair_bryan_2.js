const averagePair = (nums, targetAverage) => {
  // check if array is empty
  if (nums.length === 0) {
    return false;
  }

  // create two pointers
  let start = 0;
  let end = nums.length - 1;

  // loop through array
  for (let i = 0; i < nums.length; i++) {
    const average = (nums[start] + nums[end]) / 2;

    if (average === targetAverage) {
      return true;
    } else if (average < targetAverage) {
      // if the average is less than target average, we need to move the left pointer up by one
      start++;
    } else if (average > targetAverage) {
      // if the average is greater than target average, we need to move right pointer down by one
      end--;
    }
  }

  // Average was never equal, return false
  return false;
};

// true
averagePair([1, 2, 3], 2.5); //?
// true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); //?
// false
averagePair([-1, 0, 3, 4, 5, 6], 4.1); //?
// false
averagePair([], 4); //?
