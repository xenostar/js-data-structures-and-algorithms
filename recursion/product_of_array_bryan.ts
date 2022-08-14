const productOfArray = (arr: number[]) => {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(arr.slice(1));
};

//  6
productOfArray([1, 2, 3]); //?
//  60
productOfArray([1, 2, 3, 10]); //?
