console.log('timeout 실행 전: ' + new Date());

function f() {
  console.log('timeout 실행 후: ' + new Date());
}
setTimeout(f, 60 * 1000); // 1분

console.log('timeout 뒤에 실행');
console.log('timeout 뒤에 실행2');

/*
timeout 실행 전: Mon Dec 26 2022 21:27:10 GMT+0900 (대한민국 표준시)
timeout 뒤에 실행
timeout 뒤에 실행2
timeout 실행 후: Mon Dec 26 2022 21:28:10 GMT+0900 (대한민국 표준시)
*/
