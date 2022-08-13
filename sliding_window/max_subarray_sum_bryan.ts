const maxSubarraySum = (nums: number[], window: number) => {
  if (nums.length < window) return null;

  let max = 0;
  let tempMax = 0;

  for (let i = 0; i < window; i++) {
    tempMax += nums[i];
  }

  max = tempMax;

  // loop through nums array starting at window point and loop to end
  for (let i = window; i < nums.length; i++) {
    // set temp max equal to (current index - window) + current index
    // essentially we subtract the end and add the beginning
    tempMax = tempMax - nums[i - window] + nums[i];
    // if this new value is greater than max, set max to tempMax
    max = Math.max(tempMax, max);
  }

  return max;
};

// 700
maxSubarraySum([100, 200, 300, 400], 2); //?
// 39
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); //?
// 5
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); //?
// 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); //?
// null
maxSubarraySum([2, 3], 3); //?
