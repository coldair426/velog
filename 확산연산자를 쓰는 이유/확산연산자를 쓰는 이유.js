// 빈 배열을 그냥 생성하면 메서드로 가공하기 쉽지 않음.
console.log(new Array(10)); // [ <10 empty items> ]
console.log(new Array(10).map((v, j) => j)); // [ <10 empty items> ]

// 빈 배열을 fill()로 채운 뒤 이용하면 좀더 쉬워 진다.
console.log(new Array(10).fill(0));
/*
[
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
]
*/
console.log(new Array(10).fill(0).map((v, j) => j));
/*
[
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9
]
*/

// 배열 안에 확산연산자로 빈 배열을 넣으면 자동으로 undefined가 들어간다.
// 더 간결하고 이해하기 쉬운 코드가 된다.

// 확산 연산자를 쓰면 .fill(undefined) 효과가 남.

console.log(new Array(10).fill(undefined).map((v, j) => j));
/*
[
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]
*/
