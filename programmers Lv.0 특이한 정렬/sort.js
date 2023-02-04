const arr = [8, 4, 7, 5, 9, 6, 3, 2, 1];

console.log(
  arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
  })
); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(arr.sort((a, b) => a - b)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(
  arr.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    if (a === b) return 0;
  })
); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

console.log(arr.sort((a, b) => b - a)); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
