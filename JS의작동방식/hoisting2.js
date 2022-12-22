myFunction(); // ReferenceError: Cannot access 'myFunction' before initialization

const myFunction = function myFunction() {
  console.log('hello world');
};
