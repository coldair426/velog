let test = { a: 1, b: 2 };
Object.freeze(test);

test.a = 3;
console.log(test); // { a: 1, b: 2 }

test = { a: 3, b: 2 };
console.log(test); // { a: 3, b: 2 }
