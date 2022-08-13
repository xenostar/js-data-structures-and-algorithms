const fib = (n: number) => {
  let n1 = 0;
  let n2 = 1;
  let nextTerm = 0;
  let fib = 0;

  for (let i = 1; i <= n; i++) {
    fib = n1;
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  return fib;
}


// 0
// fib(1) //?

// 1
// fib(2) //?

// 1
// fib(3) //?

// 2
fib(4) //?