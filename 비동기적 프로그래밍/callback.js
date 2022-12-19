// fistFn은 함수를 받아 실행하는 함수.
function fistFn(callbFn) {
  callbFn();
}
// consoleLog 함수는 'callback'을 출력하는 함수.
function consoleLog() {
  console.log('callback');
}
// fistFn함수의 파라미터로 consoleLog 함수가 주어짐.
// fistFn함수가 실행되고 나서, callback 함수가 출력됨.
fistFn(consoleLog);
