/*
정적으로 보면 이 프로그램은 단순히 위에서 아래로 읽어내리는 문의 연속.
하지만 실행 흐름은 읽는 순서와 다름.
f1이 f2보다 먼저 정의되었지만,
f2의 함수바디가 먼저 실행되고 f1으로 그리고 다시 f2로 넘어감.
*/
function f1() {
  console.log('one');
}
function f2() {
  console.log('two');
}

f2();
f1();
f2();
