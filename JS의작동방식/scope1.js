const value = 'hello!'; // global scope.

function myFunction() {
  console.log('myFunction: '); // myFunction:
  console.log(value); // hello! // global을 가르킴.
}

function otherFunction() {
  console.log('otherFunction: '); // otherFunction:
  const value = 'bye!'; // function scope. global에는 영향 없음.
  console.log(value); // bye!
}

myFunction();
otherFunction();

console.log('global scope: '); // global scope:
console.log(value); // hello!
