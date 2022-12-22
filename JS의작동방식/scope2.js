const value = 'hello!'; // global scope.

function myFunction() {
  const value = 'bye!';
  const anotherValue = 'world'; // function scope.
  function functionInside() {
    console.log('functionInside: '); // functionInside:
    console.log(value); // bye!
    console.log(anotherValue); // world
  }
  functionInside();
}

myFunction();
console.log('global scope: '); // global scope:
console.log(value); // hello!
console.log(anotherValue); // ReferenceError: anotherValue is not defined
