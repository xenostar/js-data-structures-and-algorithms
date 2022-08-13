function maxSubarraySum(arr, num) {
	let maxSum = 0;
	let tempSum = 0;
	if (arr.length < num) return null;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		// tempSum = 17
		// starting at index 3: 2
		// 17 - 2 + 2
		// tempSum = 17
		// starting at index 4: 1
		// 17 - 6 + 1
		// tempSum = 12

		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
