// foo()가 반복 실행하는 재귀 함수.
function foo() {
  foo();
}
foo(); // RangeError: Maximum call stack size exceeded
