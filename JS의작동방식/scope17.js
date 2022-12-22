// 자신이 몇 번 호출됐는지 보고하는 함수.
const f = (function () {
  let count = 0;
  return function () {
    return console.log(`I have been called ${++count} time(s).`);
  };
})();
f(); // I have been called 1 time(s).
f(); // I have been called 2 time(s).
