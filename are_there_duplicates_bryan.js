function areThereDuplicates(...args) {
	// create a counter object to store count of each argument
	const counter = {};

	// - loop through args
	// - if the arg already exists in our counter object, return true
	// - else, add it to the counter object
	for (const arg of args) {
		if (counter[arg]) {
			return true;
		} else {
			counter[arg] = (counter[arg] || 0) + 1;
		}
	}

	return false;
}

// False
areThereDuplicates(1, 2, 3); //?
// True
areThereDuplicates(1, 2, 2); //?
// False
areThereDuplicates('a', 'b', 'c', 'd'); //?
// True
areThereDuplicates('a', 'b', 'b', 'd'); //?
