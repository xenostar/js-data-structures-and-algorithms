const factorial = (num: number) => {
  // if we're at 1 or if num is 0, just return 1
  if (num === 1 || num === 0) return 1;
  // basically we're iterating num down by 1 until we hit 1
  return num * factorial(num - 1)
}

// 1
factorial(0) //?

// 1
factorial(1) //?
// 2
factorial(2) //?
// 24
factorial(4) //?
// 5040
factorial(7) //?