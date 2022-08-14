// SAMPLE INPUT / OUTPUT
const isOdd = (val: number) => val % 2 !== 0;

const someRecursive = (arr: number[], callback: (val: number) => boolean) => {
  let testResult = false;

  const testCb = (arr: number[]) => {
    if (arr.length === 0) return;

    const cbResult = callback(arr[arr.length - 1]);
    if (cbResult === true) testResult = true;

    arr.pop();

    return testCb(arr);
  };

  testCb(arr);

  return testResult;
};

// true
someRecursive([1, 2, 3, 4], isOdd); //?
// true
someRecursive([4, 6, 8, 9], isOdd); //?
// false
someRecursive([4, 6, 8], isOdd); //?
// false
someRecursive([4, 6, 8], (val) => val > 10); //?
