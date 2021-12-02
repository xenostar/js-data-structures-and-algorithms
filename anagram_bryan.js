function validAnagram(string1, string2) {
	// First, we short circuit by comparing the length of both strings.
	// If the strings are not equal in length, it is not an anagram.
	if (string1.length !== string2.length) {
		return false;
	}

	// Declare string1Counter and string2Counter objects that will store information about the
	// letters and their frequency in each string argument.
	const string1Counter = {};
	const string2Counter = {};

	// Since both strings are the same length, we can loop through one and build both counters.
	for (let i = 0; i < string1.length; i++) {
		string1Counter[string1[i]] = (string1Counter[string1[i]] || 0) + 1;
		string2Counter[string2[i]] = (string2Counter[string2[i]] || 0) + 1;
	}

	// Loop through the keys of string1Counter
	for (const key in string1Counter) {
		// Check if key exists in string2Counter. If it doesn't, then return false.
		if (!string2Counter[key]) {
			return false;
		}
		// If key exists, then see if the count value is the same. If it isn't, return false.
		if (string1Counter[key] !== string2Counter[key]) {
			return false;
		}
	}

	// Finally, we can return true at the end since all checks passed.
	return true;
}

validAnagram('', ''); //?
validAnagram('bcka', 'absc'); //?
validAnagram('aacccz', 'zaccca'); //?
