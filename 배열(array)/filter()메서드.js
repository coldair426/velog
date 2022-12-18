// 1부터 10까지의 배열을 만들고, 3의 배수를 제거.
const arr = [...new Array(10)].map((_, i) => i + 1).filter((v) => v % 3 !== 0);
console.log(arr); // [ 1, 2,  4, 5, 7, 8, 10 ]
