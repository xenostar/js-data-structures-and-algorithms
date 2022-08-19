const stringSearch = (str: string, pattern: string) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === pattern[0]) {
      for (let j = 0; j < pattern.length; j++) {
        if (str[i + j] !== pattern[j]) break;
        // if (str[i + j] === pattern[pattern.length - 1]) count += 1;
        if (j === pattern.length - 1) count += 1;
      }
    }
  }

  return count;
};

// 2
stringSearch('wowomgzomg', 'omg'); //?
stringSearch('wowomgzomg', 'asd'); //?
stringSearch('wowomgzomg', 'om'); //?
