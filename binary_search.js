function search(array, val) {
	// Create a min and max starting indexes for search
	let min = 0; // index of beginning of array
	let max = array.length - 1; // index of end of array

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

search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7); //?
