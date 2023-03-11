const test = { a: 1, b: 2, c: 4 };
Object.freeze(test);

test.c = 100;
console.log(test);
