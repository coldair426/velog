// 클로저는 함수와 함수스코프의 조합.
// 함수가 생성될 당시의 외부 변수를 기억.
// 생성 이후에도 계속 접근 가능.

function makeAdd(i) {
  // makeAdd함수의 리턴은 makeAdd함수의 i에 접근 가능.
  return function (w) {
    return i + w;
  };
}
// makeAdd함수의 리턴함수가 들어감.
// 이때, makeAdd함수에 들어갔던 i는 유지가 됨.
// 즉, 클로저 생성.
let x = makeAdd(1);
console.log(x(1)); // 2
console.log(x(2)); // 3

let y = makeAdd(2);
console.log(y(1)); // 3
console.log(y(2)); // 4
