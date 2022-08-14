const stringifyNumbers = (obj) => {
  // create new object that we build out
  let newObj = {};

  // iteratre through object keys
  for (const key in obj) {
    // if key is an object and not an array...
    // call this function recursively to unfurl that tree
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    }
    // if key is a number, set the value in newObj to this value cast as a string
    else if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    }
    // otherwise, just set the old obj value to the newObj value
    else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

// let newObj = {
//   num: '1',
//   test: [],
//   data: {
//     val: '4',
//     info: {
//       isRight: true,
//       random: '66',
//     },
//   },
// };
stringifyNumbers(obj); //?
