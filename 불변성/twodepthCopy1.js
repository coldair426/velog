const test = { a: { b: 1 }, b: 3, c: 5 };
const testCopy = { ...test, a: { ...test.a } };

console.log(test === testCopy); // false
console.log(test.a === testCopy.a); // false; 2depth deep copy
