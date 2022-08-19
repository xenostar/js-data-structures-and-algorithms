// const selectionSort = (originalArray: number[]) => {
//   let array = [...originalArray];

//   for (let i = 0; i < array.length; i++) {
//     let smallestValue = array[i];
//     let swapIndex = 0;
//     let newMin = false;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < smallestValue) {
//         smallestValue = array[j];
//         swapIndex = j;
//         newMin = true;
//       }
//     }
//     if (newMin) {
//       array = swap(array, i, swapIndex);
//     }
//   }

//   function swap(arr, idx1, idx2) {
//     const newArr = [...arr];
//     let temp = newArr[idx1];
//     newArr[idx1] = newArr[idx2];
//     newArr[idx2] = temp;
//     return newArr;
//   }

//   return array;
// };

const selectionSort = (originalArray: number[]) => {
  let array = [...originalArray];

  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      array = swap(array, i, lowest);
    }
  }

  function swap(arr, idx1, idx2) {
    const newArr = [...arr];
    let temp = newArr[idx1];
    newArr[idx1] = newArr[idx2];
    newArr[idx2] = temp;
    return newArr;
  }

  return array;
};

selectionSort([3, 5, 3, 1, 4, 1]); //?
