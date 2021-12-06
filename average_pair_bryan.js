function averagePair(nums, targetAvg) {
	// If nums array is empty, return false
	if (nums.length === 0) {
		return false;
	}

	let start = 0;
	let end = nums.length - 1; //?

	// - Loop through nums array. for each iteration:
	// - calculate average value of i[start] and i[end]
	// - if that value is EQUAL to targetAvg, return true
	// - if the value is GREATER than targetAvg, move max down
	// - if the value is LESS than targetAvg, move min up
	for (let i = 1; i < nums.length; i++) {
		const average = (nums[start] + nums[end]) / 2;

		if (average === targetAvg) {
			return true;
		} else if (average > targetAvg) {
			end--;
		} else {
			start++;
		}
	}

	return false;
}

// True
averagePair([1, 2, 3], 2.5); //?
// True
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); //?
// False
averagePair([-1, 0, 3, 4, 5, 6], 4.1); //?
// False
averagePair([], 4); //?
