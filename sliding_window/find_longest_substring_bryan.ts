const findLongestSubstring = (string: string) => {
  let start = 0;
  let maxLength = 0;
  let lookup = {}

  for (let i = 0; i < string.length; i++) {
    // Look at current letter in string
    const letter = string[i]

    // check if letter exists in our lookup
    if (lookup[letter]) {
      // if it does, set starting point to this letter
      start = Math.max(start, lookup[letter])
    }

    // set maxLength to current index - start + 1
    maxLength = Math.max(maxLength, i - start + 1)
    // add current letter to lookup, add 1 so we offset the index
    lookup[letter] = i + 1;
  }

  return maxLength
}

// 0
findLongestSubstring(''); //?
// 7
findLongestSubstring('rithmschool'); //?
// 6
findLongestSubstring('thisisawesome'); //?
// 7
findLongestSubstring('thecatinthehat'); //?
// 1
findLongestSubstring('bbbbbb'); //?
// 8
findLongestSubstring('longestsubstring'); //?
// 6
findLongestSubstring('thisishowwedoit'); //?