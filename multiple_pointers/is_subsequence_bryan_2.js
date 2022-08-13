const isSubsequence = (str1, str2) => {
  // If we're missing any strings, or second string is smaller, bail out
  if (!str1 || !str2 || str2.length < str1.length) {
    return false;
  }

  let i = 0;
  let j = 0;

  while (i < str2.length) {
    if (str1[j] === str2[i]) {
      // check if current character of str2 is equal to first character of str1
      // if so, iterate j
      j++;
    }
    if (str1.length === i) {
      // if i === str1.length, we're at the end, so return true
      return true;
    }

    i++;
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
