function swap(arr, idx1, idx2) {
  const newArr = [...arr];
  let temp = newArr[idx1];
  newArr[idx1] = newArr[idx2];
  newArr[idx2] = temp;
  return newArr;
}

swap(['a', 'b', 'c'], 0, 2); //?
