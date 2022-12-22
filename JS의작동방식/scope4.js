// var 키워드는 function scope 안의 block scope를 인정하지 않음.
// function 단위로 scope가 설정됨.
var value = 'hello!';

function myFunction() {
  var value = 'bye!';
  if (true) {
    var value = 'world';
    console.log('block scope: '); // block scope:
    console.log(value); // world
  }
  console.log('function scope: '); // function scope:
  console.log(value); // world
}

myFunction();
console.log('global scope: '); // global scope:
console.log(value); // hello!
