const isSubsequence = (str1, str2) => {
  // If we're missing any strings, or second string is smaller, bail out
  if (!str1 || !str2 || str2.length < str1.length) {
    return false;
  }

  // loop through str2
  for (let i = 0; i < str2.length; i++) {
    // check if character exists at beginning of str1, if it does, remove it from str1
    if (str1[0] === str2[i]) {
      str1 = str1.substring(1);
    }
    // if str1 is empty, return true
    if (str1.length === 0) {
      return true;
    }
  }

  // else return false
  return false;
};

// true
isSubsequence('hello', 'hello world'); //?
// true
isSubsequence('sing', 'sting'); //?
// true
isSubsequence('abc', 'abracadabra'); //?
// false (order matters)
isSubsequence('abc', 'acb'); //?
