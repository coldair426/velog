// x가 잠시 존재하며, 이 때문에 x+3을 계산 가능.
function f(x) {
  return x + 3;
}
// 하지만 함수 바디를 벗어나면 x는 존재하지 않은 것 처럼 보임.
console.log(f(5)); // 8
console.log(x); // ReferenceError: x is not defined
// 따라서 x의 스코프는 함수 f라고 할 수 있음.
