const nestedEvenSum = (obj) => {
  let sum = 0;

  for (const key in obj) {
    // if obj[key] is object, sum is equal to nestedEvenSum(obj[key])
    if (typeof obj[key] === 'object') {
      sum = sum + nestedEvenSum(obj[key]);
    }
    // if obj[key] is a number and is % 2 === 0, add it to sum
    else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum = sum + obj[key];
    }
  }

  return sum;
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

// 6
nestedEvenSum(obj1); //?
// 10
nestedEvenSum(obj2); //?
