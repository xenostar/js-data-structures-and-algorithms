const capitalizeFirst = (arr: string[]) => {
  let newArr: string[] = [];

  if (arr.length === 0) {
    return newArr;
  }

  let word = arr[0];
  word = word.charAt(0).toUpperCase() + word.slice(1);

  newArr.push(word);

  newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
  return newArr;
};

// ['Car','Taco','Banana']
capitalizeFirst(['car', 'taco', 'banana']); //?

// const foo = ['c']

// foo.slice(1); //?
