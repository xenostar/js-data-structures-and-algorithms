const sameFrequency = (number1, number2) => {
  // turn numbers into strings
  const num1 = number1.toString();
  const num2 = number2.toString();

  // If numbers aren't same length, return false
  if (num1.length !== num2.length) {
    return false;
  }

  // create frequency counter for num1
  const num1Counter = {};

  // loop through num1 and create the frequency counter object
  for (let i = 0; i < num1.length; i++) {
    const number = num1[i];
    num1Counter[number] ? num1Counter[number]++ : (num1Counter[number] = 1);
  }

  // loop through num2
  // for each number, check if key exists and is not 0 in num1Counter
  // if it exists, subtract 1 from value of key
  for (const number of num2) {
    // if (!num1Counter.hasOwnProperty(number) || num1Counter[number] === 0) {
    if (!num1Counter[number]) {
      return false;
    } else {
      num1Counter[number] -= 1;
    }
  }

  // return true if frequency is the same
  return true;
};


// true
sameFrequency(182, 281); //?
// false
sameFrequency(34, 14); //?
// true
sameFrequency(3589578, 5879385); //?
// false
sameFrequency(22, 222); //?
