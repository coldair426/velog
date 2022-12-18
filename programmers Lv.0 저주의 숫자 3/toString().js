// string 으로 변환.
let n1 = 3;
let n2 = 2;
console.log(n1.toString() + n2.toString()); // 32

// 진수 변환 가능.
let num = 234;
num = num.toString(2);
console.log(num); // 11101010

// 문자열은 진수 변환 불가능.
let num = '234';
num = num.toString(2);
console.log(num); // 234

// 배열을 변환시 모든 원소가 합쳐진 string 반환. (쉼표 포함)
const arr = [34, 234, 5, 43, 3241, 4352353];
console.log(arr.toString()); // 34,234,5,43,3241,4352353

// 객체의 경우 모두 [object object] 반환.
