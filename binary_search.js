function search(array, val) {
	// Create a min and max starting point for search
	let min = 0; // beginning of array
	let max = array.length - 1; // end of array

	while (min <= max) {
		const middle = Math.floor((min + max) / 2);
		const currentElement = array[middle];

		if (currentElement < val) {
			min = currentElement + 1;
		} else if (currentElement > val) {
			max = currentElement - 1;
		} else {
			return middle;
		}
	}

	return -1;
}

Math.floor(5); //?

search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7); //?
