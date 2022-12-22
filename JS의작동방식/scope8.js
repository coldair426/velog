/*
함수가 호출하는 컨텍스트(스코프)에 대한히 의존적.
전역 변수 name, age는 언제든 (의도적이든 실수로든) 바꿀 수 있음.
함수 greet과 getBirthYear는 전역 변수에 의존.
*/
let name = 'Irena'; // 전역변수
let age = 25;

function greet() {
  console.log(`hello, ${name}`);
}
function getBirthYear() {
  return new Date().getFullYear() - age;
}
