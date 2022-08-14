const isPalindrome = (word: string) => {
  const reverse = (word: string) => {
    if (word.length === 0) return '';
    return word.slice(-1) + reverse(word.slice(0, -1));
  };

  const reverseWord = reverse(word);

  return word === reverseWord ? true : false;
};

// false
isPalindrome('awesome'); //?
// false
isPalindrome('foobar'); //?
// true
isPalindrome('tacocat'); //?
// true
isPalindrome('amanaplanacanalpanama'); //?
// false
isPalindrome('amanaplanacanalpandemonium'); //?
