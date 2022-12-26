console.log('timeout 실행 전: ' + new Date());

setTimeout(function () {
  console.log('timeout 실행 후: ' + new Date());
}, 60 * 1000); // 1분

console.log('timeout 뒤에 실행');
console.log('timeout 뒤에 실행2');
