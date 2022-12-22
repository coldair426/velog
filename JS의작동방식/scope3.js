const value = 'hello!'; // global scope.

function myFunction() {
  const value = 'bye!';
  if (true) {
    const value = 'world'; // block scope.
    console.log('block scope: '); // block scope:
    console.log(value); // world
  }
  console.log('function scope: '); // function scope:
  console.log(value); // bye!
}

myFunction();
console.log('global scope: '); // global scope:
console.log(value); // hello!
