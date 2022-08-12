const validAnagram = (str1, str2) => {
  // check if str1 and str2 are same length
  if (str1.length !== str2.length) {
    return false;
  }

  const str1Lookup = {};
  const str2Lookup = {};

  // loop through str1
  // create str1Lookup that keeps track of letters & occurences
  for (const character of str1) {
    str1Lookup[character] = (str1Lookup[character] || 0) + 1;
  }

  // loop through str2
  // create str2Lookup that keeps track of letters & occurences
  for (const character of str2) {
    str2Lookup[character] = (str2Lookup[character] || 0) + 1;
  }

  // loop through str1Lookup
  for (const key in str1Lookup) {
    // for each key, check to see if key exists in str2Lookup
    if (!str2Lookup.hasOwnProperty(key)) {
      return false;
    }
    // also, check to see that value of key is the same in str2Lookup
    if (str2Lookup[key] !== str1Lookup[key]) {
      return false;
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
