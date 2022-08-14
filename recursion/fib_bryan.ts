const fib = (num: number) => {
  if (num <= 1) return num;
  return fib(num - 1) + fib(num - 2);
};

// 4 + 2
// 3 + 0
// 1 + 1
// 1 + 1

// 3
fib(4); //?
// 55
fib(10); //?
// 317811
fib(28); //?
// 9227465
fib(35); //?
