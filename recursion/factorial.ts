// Recursive Version
function factorial(num: number) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// function factorial(x){
//   if (x < 0 ) return 0;
//   if (x <= 1 ) return 1;
//   return x * factorial(x-1);
// }

factorial(3);

// return 3 * factorial(2)
//            return 2 * factorial(1)
//                       return 1 (base case)

// return 3 * factorial(2)
//            return 2 * 1

// return 3 * 2

// return 6
