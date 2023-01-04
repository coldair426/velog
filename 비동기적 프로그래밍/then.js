// 초를 매개변수로 받아 카운트다운히고,
// 끝나면 프라미스를 반환.
function countdown(seconds) {
  return new Promise(function (resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(() => {
        if (i === 13) return reject(new Error('Oh my god'));
        if (i > 0) console.log(i + '...');
        else resolve(console.log('GO!'));
      }, (seconds - i) * 1000);
    }
  });
}

// then 핸들러는 성공 콜백과 에러 콜백을 받음.
countdown(5).then(
  function () {
    console.log('카운트다운 성공');
  },
  function (err) {
    console.log('카운트다운 실패: ' + err.message);
  }
);
