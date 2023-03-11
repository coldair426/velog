const test = { a: { b: 1 } };
const testCopy = { ...test };

console.log(test === testCopy); // false; 참조 주소가 다름
console.log(test.a === testCopy.a); // true; 참조 주소가 같음

const testCopy2 = { ...test, a: 3 };
console.log(testCopy2); // { a: 3 }
console.log(testCopy2 === test); // false
console.log(testCopy2 === testCopy); // false
