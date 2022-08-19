const pirate = (str: string) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (letter === 'r') {
      newStr += 'rrr';
    } else if (letter === 'R') {
      newStr += 'RRR';
    } else {
      newStr += letter;
    }
  }

  return newStr;
};

pirate('hey theRe therre'); //?
