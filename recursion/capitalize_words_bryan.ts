const capitalizedWords = (words: string[]) => {
  let newWords: string[] = [];

  if (words.length === 0) {
    return newWords;
  }

  let word = words[0];
  word = word.toUpperCase();

  newWords.push(word);

  newWords = newWords.concat(capitalizedWords(words.slice(1)));
  return newWords;
};

let words = ['i', 'am', 'learning', 'recursion'];
// ['I', 'AM', 'LEARNING', 'RECURSION']
capitalizedWords(words); //?
