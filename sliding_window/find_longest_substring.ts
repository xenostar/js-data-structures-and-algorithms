const findLongestSubstring = (string: string) => {
  if (string.length === 0) {
    return 0;
  }

  let start = 0;
  let maxLength = 0;
  const lookup = {};

  // loop through the string
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (lookup[letter]) {
      start = Math.max(start, lookup[letter]);
    }

    maxLength = Math.max(maxLength, i - start + 1);
    lookup[letter] = i + 1;
  }

  return maxLength;
};

// 0
// findLongestSubstring(''); //?
// 7
findLongestSubstring('rithmschool'); //?
// 6
// findLongestSubstring('thisisawesome'); //?
// 7
// findLongestSubstring('thecatinthehat'); //?
// 1
// findLongestSubstring('bbbbbb'); //?
// 8
// findLongestSubstring('longestsubstring'); //?
// 6
// findLongestSubstring('thisishowwedoit'); //?
