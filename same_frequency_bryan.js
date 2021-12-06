function sameFrequency(num1, num2) {
	// Change each number to a string for looping purposes
	let num1s = num1.toString();
	let num2s = num2.toString();

	// Check if number of digits is the same.
	// If they are not, the frequency of numbers will not be the same
	if (num1s.length !== num2s.length) {
		return false;
	}

	// Create two frequency counter objects that will keep track of
	// the frequency of numbers in each argument
	const num1Counter = {};
	const num2Counter = {};

	for (const num of num1s) {
		// if number exists in num1Counter, add 1 to it.
		// else, add number to num1Counter and initialize to 0.
		num1Counter[num] = (num1Counter[num] || 0) + 1;
	}
	for (const num of num2s) {
		num2Counter[num] = (num2Counter[num] || 0) + 1;
	}

	// loop through num1 or num2
	// - for each number, check to see that:
	//   - a key exists in both numCounter objects
	//   - the key has the same value for both keys
	for (const num of num1s) {
		if (num1Counter[num] !== num2Counter[num]) {
			return false
		}
	}

	return true;
}

// True
sameFrequency(182, 281); //?
// False
sameFrequency(34, 14); //?
// True
sameFrequency(3589578, 5879385); //?
// False
sameFrequency(22, 222); //?
