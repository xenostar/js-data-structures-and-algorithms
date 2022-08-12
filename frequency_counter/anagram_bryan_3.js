const validAnagram = (str1, str2) => {
  // check if str1 and str2 are same length
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  // create single lookup for str1
  for (const letter of str1) {
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (const letter of str2) {
    if (!lookup[letter]) {
      // if lookup doesn't have a key with this character or the value is false (falsy), return false
      return false;
    } else {
      // else, subtract 1 from the value of this key in the lookup
      lookup[letter] -= 1;
    }
  }

  return true;
};

validAnagram('', ''); //?
validAnagram('aaz', 'zza'); //?
validAnagram('anagram', 'nagaram'); //?
validAnagram('rat', 'car'); //?
validAnagram('awesome', 'awesom'); //?
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'); //?
validAnagram('qwerty', 'qeywrt'); //?
validAnagram('texttwisttime', 'timetwisttext'); //?
