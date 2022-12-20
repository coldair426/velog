// 배열의 요소중 10보다 큰 요소가 하나라도 있는지 판단.
console.log([2, 5, 8, 1, 4].some((v) => v > 10)); // false
console.log([12, 5, 8, 1, 4].some((v) => v > 10)); // true

// 값이 배열 내에 존재하는지 확인
console.log(['apple', 'banana', 'mango', 'guava'].some((v) => v === 'apple')); // true
console.log(['apple', 'banana', 'mango', 'guava'].some((v) => v === 'melon')); // false
