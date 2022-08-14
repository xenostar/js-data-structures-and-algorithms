const recursiveRange = (num: number) => {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
};

// 21
recursiveRange(6); //?
// 55
recursiveRange(10); //?
