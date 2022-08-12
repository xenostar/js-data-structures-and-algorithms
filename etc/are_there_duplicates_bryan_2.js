/**
 * frequency counter approach
 */
const areThereDuplicates = (...args) => {
  // create frequency counter for args
  const lookup = {};

  for (const item of args) {
    lookup[item] ? lookup[item]++ : (lookup[item] = 1);
  }

  // look through lookup
  // if value for key is not equal to 1, return true
  for (const key in lookup) {
    const value = lookup[key];
    if (value !== 1) {
      return true;
    }
  }

  // no key was greater than 1, return false
  return false;
};

/**
 * multiple pointers approach
 */
// const areThereDuplicates = (...args) => {
//   // we need to sort the args first with this approach...
//   args.sort();

//   // create pointer at index 0
//   let h = 0;

//   // loop through the args starting at index 1
//   for (let i = 1; i < args.length; i++) {
//     // if h and i are NOT equal, move h up 1
//     if (args[h] !== args[i]) {
//       h++;
//     } else {
//       return true;
//     }
//   }

//   return false;
// };

/**
 * one liner approach
 */
// const areThereDuplicates = (...args) => {
//   return new Set(args).size !== args.length;
// };

// false
//                       h
areThereDuplicates(1, 2, 3, 3); //?
//                          i
//                 h
areThereDuplicates(1, 2, 3); //?
//                    i
// true
areThereDuplicates(1, 2, 2); //?
// true
areThereDuplicates('a', 'b', 'c', 'a'); //?
