function swap(arr, idx1, idx2) {
  const newArr = [...arr];
  [newArr[idx1], newArr[idx2]] = [newArr[idx2], newArr[idx1]];
  return newArr;
}

swap(['a', 'b', 'c'], 0, 2); //?
