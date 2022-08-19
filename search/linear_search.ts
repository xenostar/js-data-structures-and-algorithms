const linearSearch = (array: string[] | number[], searchValue: string | number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchValue) return i;
  }
  return -1;
};

// 1
linearSearch([10, 15, 20, 25, 30], 15); //?
// 5
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); //?
// 0
linearSearch([100], 100); //?
// -1
linearSearch([1, 2, 3, 4, 5], 6); //?
// -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); //?
// -1
linearSearch([100], 200); //?
