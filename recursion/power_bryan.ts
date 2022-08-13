function power(base: number, exponent: number) {
    // if exponent is 0, break early and just return 1
    if (exponent === 0) return 1;
    // if exponent is 1, return our base so it is the final multiplicative value
    if (exponent === 1) return base;
    // our base will always be multiplied by the base, we use exponent to count how many times to recursively call this
    return base * power(base, exponent - 1);
}

// 1
power(2, 0); //?
// 4
power(2, 2); //?
// 16
power(2, 4); //?

// power(2, 4)

// 2 * power(2, 3);
//     return 2 * power(2, 2)
//                return 2 * power(2, 1)
//                           return 2

// 2 * power(2, 3);
//     return 2 * power(2, 2)
//                return 2 * 2

// 2 * power(2, 3);
//     return 2 * 4

// 2 * 8

// 16