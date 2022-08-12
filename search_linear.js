function search(array, searchTerm) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === searchTerm) {
			return i;
		}
	}
	return -1;
}

search([1, 2, 3, 4, 5, 6], 4); //?
search([1, 2, 3, 4, 5, 6], 6); //?
search([1, 2, 3, 4, 5, 6], 11); //?
