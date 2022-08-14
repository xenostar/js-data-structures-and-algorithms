const flatten = (arr: any[]) => {
  // create a newArray
  let newArray: number[] = [];

  // loop through array
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // if current value is array
      // set newArray to newArray.concat(flatten(arr[i]))
      // essentially we're sending the current array back into flatten() until we get to the non-array values
      newArray = newArray.concat(flatten(arr[i]));
    } else {
      // if current value is not an array
      // push it to newArray
      newArray.push(arr[i]);
    }
  }

  // if we got to this point in the recursion above, that means we finally
  // are at values and not an array, thus we return it so it can be
  // concatenated up the stack
  return newArray;
};

// [1, 2, 3, 4, 5]
flatten([1, 2, 3, [4, 5]]); //?
// [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); //?
// [1,2,3]
flatten([[1], [2], [3]]); //?
// [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); //?
