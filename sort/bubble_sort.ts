const bubbleSort = (originalArray: number[]) => {
  let array = [...originalArray];
  let noSwap = false;

  for (let i = array.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        array = swap(array, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }

  return array;
};

function swap(arr, idx1, idx2) {
  const newArr = [...arr];
  let temp = newArr[idx1];
  newArr[idx1] = newArr[idx2];
  newArr[idx2] = temp;
  return newArr;
}

bubbleSort([3, 5, 3, 1, 4, 1]); //?

bubbleSort([8, 1, 2, 3, 4, 5]); //?
