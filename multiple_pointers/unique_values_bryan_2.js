const countUniqueValues = (arr) => {
  // if array is empty, return 0
  if (arr.length === 0) {
    return 0;
  }

  // create a left counter
  let i = 0;

  // Loop through the array, second counter is array counter
  for (let j = 1; j < arr.length; j++) {
    // if i and j are different
    if (arr[i] !== arr[j]) {
      // move i forward and set it to current value of j
      // move j forward by 1 (taken care of by loop)
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};
countUniqueValues([1, 1, 1, 1, 1, 2]); //?
//                 i
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); //?
//                    j
countUniqueValues([]); //?
countUniqueValues([-2, -1, -1, 0, 1]); //?
